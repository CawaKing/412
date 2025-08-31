const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') filePath = './index.html';
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif'
  };
  
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Archivo no encontrado');
      } else {
        res.writeHead(500);
        res.end('Error interno del servidor');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Crear servidor WebSocket
const wss = new WebSocket.Server({ server });

// Almacenar salas de juego
const gameRooms = {};

function generateRoomCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      
      switch (data.type) {
        case 'CREATE_ROOM':
          const roomCode = generateRoomCode();
          gameRooms[roomCode] = {
            code: roomCode,
            host: ws,
            players: [{ ws, name: data.playerName, isHost: true }],
            gameState: 'waiting',
            gameConfig: null,
            currentPlayer: 0,
            words: [],
            roles: []
          };
          ws.roomCode = roomCode;
          ws.send(JSON.stringify({
            type: 'ROOM_CREATED',
            roomCode: roomCode,
            isHost: true
          }));
          break;
          
        case 'JOIN_ROOM':
          const room = gameRooms[data.roomCode];
          if (room && room.gameState === 'waiting') {
            room.players.push({ ws, name: data.playerName, isHost: false });
            ws.roomCode = data.roomCode;
            ws.send(JSON.stringify({
              type: 'ROOM_JOINED',
              roomCode: data.roomCode,
              isHost: false
            }));
            
            // Notificar a todos los jugadores
            room.players.forEach(player => {
              player.ws.send(JSON.stringify({
                type: 'PLAYER_UPDATE',
                players: room.players.map(p => ({ name: p.name, isHost: p.isHost }))
              }));
            });
          } else {
            ws.send(JSON.stringify({
              type: 'ERROR',
              message: 'Sala no encontrada o juego ya iniciado'
            }));
          }
          break;
          
        case 'START_GAME':
          const gameRoom = gameRooms[ws.roomCode];
          if (gameRoom && gameRoom.players[0].ws === ws) {
            gameRoom.gameState = 'playing';
            gameRoom.gameConfig = data.config;
            gameRoom.words = data.words;
            
            // Asignar roles
            const playerCount = gameRoom.players.length;
            const impostorCount = Math.min(data.config.impostorCount, playerCount - 1);
            const roles = Array(playerCount).fill('Jugador');
            
            // Seleccionar impostores aleatoriamente
            const impostorIndices = [];
            while (impostorIndices.length < impostorCount) {
              const idx = Math.floor(Math.random() * playerCount);
              if (!impostorIndices.includes(idx)) {
                impostorIndices.push(idx);
                roles[idx] = 'Impostor';
              }
            }
            
            gameRoom.roles = roles;
            const selectedWord = data.words[Math.floor(Math.random() * data.words.length)];
            
            // Enviar información del juego a cada jugador
            gameRoom.players.forEach((player, index) => {
              player.ws.send(JSON.stringify({
                type: 'GAME_STARTED',
                playerIndex: index,
                role: roles[index],
                word: roles[index] === 'Impostor' ? null : selectedWord,
                totalPlayers: playerCount
              }));
            });
          }
          break;
          
        case 'NEXT_PLAYER':
          const activeRoom = gameRooms[ws.roomCode];
          if (activeRoom) {
            activeRoom.currentPlayer++;
            activeRoom.players.forEach(player => {
              player.ws.send(JSON.stringify({
                type: 'PLAYER_TURN',
                currentPlayer: activeRoom.currentPlayer
              }));
            });
          }
          break;
          
        case 'END_GAME':
          const endRoom = gameRooms[ws.roomCode];
          if (endRoom) {
            endRoom.players.forEach(player => {
              player.ws.send(JSON.stringify({
                type: 'GAME_ENDED'
              }));
            });
            endRoom.gameState = 'waiting';
            endRoom.currentPlayer = 0;
          }
          break;
      }
    } catch (error) {
      console.error('Error procesando mensaje:', error);
    }
  });
  
  ws.on('close', () => {
    console.log('Cliente desconectado');
    if (ws.roomCode && gameRooms[ws.roomCode]) {
      const room = gameRooms[ws.roomCode];
      room.players = room.players.filter(player => player.ws !== ws);
      
      if (room.players.length === 0) {
        delete gameRooms[ws.roomCode];
      } else {
        // Notificar a jugadores restantes
        room.players.forEach(player => {
          player.ws.send(JSON.stringify({
            type: 'PLAYER_UPDATE',
            players: room.players.map(p => ({ name: p.name, isHost: p.isHost }))
          }));
        });
      }
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
