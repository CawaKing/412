// ===== NIVELES DE DIFICULTAD FUTBOLISTAS =====
const categories = {
  principiante: [
    "Lionel Messi","Cristiano Ronaldo","Neymar Jr","Kylian Mbappé","Erling Haaland",
    "Mohamed Salah","Robert Lewandowski","Kevin De Bruyne","Luka Modrić","Karim Benzema",
    "Harry Kane","Virgil van Dijk","Sergio Ramos","Sadio Mané","Paul Pogba",
    "Gareth Bale","Luis Suárez","Manuel Neuer","Antoine Griezmann","Eden Hazard",
    "Zlatan Ibrahimović","N'Golo Kanté","Toni Kroos","Sergio Agüero","Gerard Piqué",
    "David De Gea","Thibaut Courtois","Ángel Di María","James Rodríguez","Radamel Falcao",
    "Xavi Hernández","Andrés Iniesta","Wayne Rooney","Iker Casillas","Gianluigi Buffon",
    "Kaká","Ronaldinho","David Beckham","Thierry Henry","Roberto Carlos",
    "Zinedine Zidane","Ronaldo Nazário","Francesco Totti","Andrea Pirlo","Paolo Maldini",
    "Frank Lampard","Steven Gerrard","Rio Ferdinand","John Terry","Ashley Cole"
  ],

  intermedio: [
    "Jude Bellingham","Pedri","Phil Foden","Gavi","Bukayo Saka",
    "Vinicius Jr","Declan Rice","Martin Ødegaard","Bruno Fernandes","Marcus Rashford",
    "Jack Grealish","Bernardo Silva","Rúben Dias","João Félix","Rafael Leão",
    "Victor Osimhen","Khvicha Kvaratskhelia","Lautaro Martínez","Nicolo Barella","Federico Chiesa",
    "Florian Wirtz","Jamal Musiala","Serge Gnabry","Leroy Sané","Alphonso Davies",
    "Joshua Kimmich","Leon Goretzka","Dayot Upamecano","Matthijs de Ligt","Jules Koundé",
    "Pau Torres","Pedri González","Ansu Fati","Ferran Torres","Gavi Páez",
    "Ronald Araújo","Frenkie de Jong","Marc-André ter Stegen","Jordi Alba","Sergio Busquets",
    "Dani Alves","Carles Puyol","Samuel Eto'o","Rivaldo","Romario",
    "Carlos Valderrama","Juan Román Riquelme","Diego Forlán","Fernando Torres","David Villa"
  ],

  dificil: [
    "Lamine Yamal","Warren Zaïre-Emery","Alejandro Balde","Josko Gvardiol","Enzo Fernández",
    "Aurélien Tchouaméni","Eduardo Camavinga","Youri Tielemans","Alexander Isak","Darwin Núñez",
    "Cody Gakpo","Luis Díaz","Diogo Jota","Mason Mount","Kai Havertz",
    "Gabriel Jesus","William Saliba","Gabriel Magalhães","Ben White","Aaron Ramsdale",
    "Takehiro Tomiyasu","Granit Xhaka","Thomas Partey","Martin Ødegaard","Emile Smith Rowe",
    "Bukayo Saka","Gabriel Martinelli","Eddie Nketiah","Folarin Balogun","Reiss Nelson",
    "Kieran Tierney","Rob Holding","Pablo Marí","Cédric Soares","Nuno Tavares",
    "Mohamed Elneny","Ainsley Maitland-Niles","Nicolas Pépé","Willian","Pierre-Emerick Aubameyang",
    "Alexandre Lacazette","Bernd Leno","David Luiz","Shkodran Mustafi","Sokratis Papastathopoulos",
    "Stephan Lichtsteiner","Denis Suárez","Henrikh Mkhitaryan","Mesut Özil","Santi Cazorla"
  ],

  estrella: [
    "Viktor Gyökeres","Mikel Merino","Dani Olmo","Pau Cubarsí","Fermín López",
    "Marc Casadó","Eric García","Héctor Fort","Álex Valle","Pablo Torre",
    "Unai Hernández","Luka Romero","Abde Ezzalzouli","Chadi Riad","Mika Faye",
    "Noah Darvich","Toni Fernández","Guille Fernández","Marc Bernal","Andrés Cuenca",
    "Ilias Akhomach","Estanis Pedrola","Aleix Garrido","Diego Kochen","Ander Astralaga",
    "Arnau Tenas","Sergi Domínguez","Mika Mármol","Clément Lenglet","Marcos Alonso",
    "Iñaki Peña","Neto","Samuel Umtiti","Martin Braithwaite","Miralem Pjanić",
    "Riqui Puig","Francisco Trincão","Matheus Fernandes","Jean-Clair Todibo","Junior Firpo",
    "Carles Aleñá","Álex Collado","Konrad de la Fuente","Rey Manaj","Yusuf Demir",
    "Luuk de Jong","Philippe Coutinho","Adama Traoré","Pierre-Emerick Aubameyang","Ferran Jutglà"
  ],

  cuatrodocedos: [
    "Pol Lozano","Marc Guiu","Pau Víctor","Ángel Alarcón","Robert Navarro",
    "Mikayil Faye","Sergi Domínguez","Arnau Tenas","Diego Kochen","Ander Astralaga",
    "Lamine Yamal Nasraoui","Pau Cubarsí Paredes","Marc Casadó Torras","Héctor Fort Vanaclocha","Álex Valle Morón",
    "Pablo Torre Carral","Unai Hernández de Lara","Fermín López Marín","Marc Bernal Relat","Andrés Cuenca García",
    "Ilias Akhomach Chakkour","Estanis Pedrola Blanco","Aleix Garrido Vila","Toni Fernández Miñano","Guille Fernández López",
    "Noah Darvich Mohammadi","Mika Faye Ba","Chadi Riad Hammoud","Luka Romero Bezzana","Abde Ezzalzouli Ouahbi",
    "Álex Balde Martínez","Gerard Martín Comamala","Iñigo Martínez Berridi","Andreas Christensen Hansen","Joao Cancelo Silva",
    "Raphinha Dias Belloli","Ilkay Gündogan Ahmad","Oriol Romeu Vidal","Pedri González López","Gavi Páez Gavira",
    "Frenkie de Jong Gorré","Robert Lewandowski Krzywański","Sergi Roberto Carnicer","Jordi Alba Ramos","Sergio Busquets Burgos",
    "Marc-André ter Stegen Wohlgemuth","Iñaki Peña Sotorres","Ander Astralaga Urbina","Diego Kochen Martinez","Arnau Tenas Ureña"
  ]
};


// ===== ESTADO DEL JUEGO =====
let words = [];            // todas las palabras disponibles
let players = [];          // [{name, role, word}]
let playerCount = 0;
let impostorCount = 1;
let currentPlayer = 0;
let impostors = [];
let selectedCategories = new Set();

// ===== MULTIJUGADOR =====
let ws = null;
let isMultiplayer = false;
let isHost = false;
let roomCode = '';
let myPlayerIndex = -1;
let myRole = '';
let myWord = '';
let multiplayerWords = [];
let selectedMultiplayerCategories = new Set();

// ===== UTILIDADES DE UI =====
const $ = (id) => document.getElementById(id);
const show = (id) => $(id).classList.add('visible');
const hide = (id) => $(id).classList.remove('visible');

// Inicializar conexión WebSocket al cargar la página
window.addEventListener('load', () => {
  connectWebSocket();
});

// ===== CONEXIÓN WEBSOCKET =====
function connectWebSocket() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    return; // Ya está conectado
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}`;

  try {
    ws = new WebSocket(wsUrl);
  } catch (error) {
    console.error('Error creando WebSocket:', error);
    return;
  }

  ws.onopen = () => {
    console.log('Conectado al servidor');
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    handleServerMessage(data);
  };

  ws.onclose = () => {
    console.log('Desconectado del servidor');
    if (isMultiplayer) {
      alert('Se perdió la conexión con el servidor');
      goToMultiplayer();
    }
  };

  ws.onerror = (error) => {
    console.error('Error WebSocket:', error);
    alert('Error de conexión');
  };
}

function handleServerMessage(data) {
  switch (data.type) {
    case 'ROOM_CREATED':
      roomCode = data.roomCode;
      isHost = data.isHost;
      isMultiplayer = true;
      showLobby();
      break;

    case 'ROOM_JOINED':
      roomCode = data.roomCode;
      isHost = data.isHost;
      isMultiplayer = true;
      showLobby();
      break;

    case 'PLAYER_UPDATE':
      updatePlayersList(data.players);
      break;

    case 'GAME_STARTED':
      myPlayerIndex = data.playerIndex;
      myRole = data.role;
      myWord = data.word;
      startMultiplayerGamePlay(data.totalPlayers);
      break;

    case 'PLAYER_TURN':
      currentPlayer = data.currentPlayer;
      updateGameUI();
      break;

    case 'GAME_ENDED':
      goToEndScreen();
      break;

    case 'ERROR':
      alert(data.message);
      break;
  }
}

// ===== FUNCIONES MULTIJUGADOR =====
function createRoom() {
  const playerName = $('playerName').value.trim();
  if (!playerName) {
    alert('Ingresa tu nombre');
    return;
  }

  if (!ws || ws.readyState !== WebSocket.OPEN) {
    connectWebSocket();
    setTimeout(() => createRoom(), 1000);
    return;
  }

  ws.send(JSON.stringify({
    type: 'CREATE_ROOM',
    playerName: playerName
  }));
}

function showJoinRoom() {
  $('join-room-section').style.display = 'block';
}

function joinRoom() {
  const playerName = $('playerName').value.trim();
  const code = $('roomCode').value.trim().toUpperCase();

  if (!playerName || !code) {
    alert('Ingresa tu nombre y el código de sala');
    return;
  }

  if (!ws || ws.readyState !== WebSocket.OPEN) {
    connectWebSocket();
    setTimeout(() => joinRoom(), 1000);
    return;
  }

  ws.send(JSON.stringify({
    type: 'JOIN_ROOM',
    playerName: playerName,
    roomCode: code
  }));
}

function showLobby() {
  hide('screen-multiplayer');
  show('screen-lobby');
  $('lobbyRoomCode').textContent = roomCode;
  if (isHost) {
    $('startGameBtn').style.display = 'block';
    $('hostConfig').style.display = 'block';
  }
}

function updatePlayersList(playerList) {
  const list = $('playersList');
  list.innerHTML = playerList.map(player => 
    `<p>${player.name}${player.isHost ? ' (Host)' : ''}</p>`
  ).join('');
}

function selectMultiplayerCategory(key, btnId) {
  if (!categories[key] || selectedMultiplayerCategories.has(key)) return;
  selectedMultiplayerCategories.add(key);

  // Unir palabras evitando duplicados
  multiplayerWords = Array.from(new Set([...multiplayerWords, ...categories[key]]));

  // Feedback visual
  const btn = $(btnId);
  if (btn) {
    btn.disabled = true;
    btn.textContent = btn.textContent + " ✓";
  }

  // Mostrar botón de iniciar si hay al menos una categoría seleccionada
  if (selectedMultiplayerCategories.size > 0) {
    $('startGameBtn').style.display = 'block';
  }
}

function startMultiplayerGame() {
  if (!isHost) return;

  const impostorCount = parseInt($('onlineImpostorCount').value || '1', 10);
  const difficulty = $('onlineDifficulty').value || 'principiante';

  // Validar configuración
  if (impostorCount < 1 || impostorCount > 10) {
    alert('Número de impostores debe estar entre 1 y 10');
    return;
  }

  // Obtener el número actual de jugadores de la lista
  const currentPlayerCount = document.querySelectorAll('#playersList p').length;

  if (impostorCount >= currentPlayerCount) {
    alert('Debe haber al menos 1 jugador que no sea impostor');
    return;
  }

  const config = {
    impostorCount: impostorCount
  };

  // Usar palabras según la dificultad seleccionada
  const gameWords = categories[difficulty] || categories.principiante;

  ws.send(JSON.stringify({
    type: 'START_GAME',
    config: config,
    words: gameWords
  }));
}

function startMultiplayerGamePlay(totalPlayers) {
  hide('screen-lobby');
  show('screen-game');

  playerCount = totalPlayers;
  currentPlayer = 0;

  updateGameUI();
}

function updateGameUI() {
  if (currentPlayer === myPlayerIndex) {
    $('playerLabel').innerText = 'Es tu turno';
    $('cardButton').innerText = 'Ver mi carta';
    $('cardButton').onclick = revealMyCard;
  } else {
    $('playerLabel').innerText = `Turno del Jugador ${currentPlayer + 1}`;
    $('cardButton').innerText = 'Esperando...';
    $('cardButton').onclick = null;
  }
}

function revealMyCard() {
  $('cardButton').innerText = (myRole === 'Impostor') 
    ? '¡Eres el impostor!' 
    : `La palabra es: ${myWord}`;
  $('cardButton').onclick = nextMultiplayerPlayer;
}

function nextMultiplayerPlayer() {
  if (currentPlayer + 1 >= playerCount) {
    ws.send(JSON.stringify({ type: 'END_GAME' }));
  } else {
    ws.send(JSON.stringify({ type: 'NEXT_PLAYER' }));
  }
}

function goToMultiplayer() {
  hide('screen-setup');
  hide('screen-lobby');
  hide('screen-game');
  hide('screen-end');
  show('screen-multiplayer');

  isMultiplayer = false;
  isHost = false;
  roomCode = '';

  // Limpiar estado multijugador
  multiplayerWords = [];
  selectedMultiplayerCategories.clear();

  // Resetear botones de categorías multijugador
  const mpButtons = ['mp-btn-principiante', 'mp-btn-intermedio', 'mp-btn-dificil', 'mp-btn-estrella', 'mp-btn-cuatrodocedos'];
  mpButtons.forEach(btnId => {
    const btn = $(btnId);
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.textContent.replace(' ✓', '');
    }
  });

  if (ws) {
    ws.close();
    ws = null;
  }

  $('playerName').value = '';
  $('roomCode').value = '';
  $('join-room-section').style.display = 'none';
  $('hostConfig').style.display = 'none';
}

function goToSinglePlayer() {
  hide('screen-multiplayer');
  show('screen-setup');
  isMultiplayer = false;
}

function renderWordList(){
  $('wordList').innerText = words.join(', ');
}

// ===== FLUJO: INICIO =====
function selectCategory(key, btnId){
  if(!categories[key] || selectedCategories.has(key)) return;
  selectedCategories.add(key);
  // unir y evitar duplicados
  words = Array.from(new Set([...words, ...categories[key]]));
  renderWordList();
  // feedback visual
  const btn = $(btnId);
  if(btn){
    btn.disabled = true;
    btn.textContent = "Cargada ✓";
  }
}

function addWord(){
  const input = $('wordInput');
  const text = (input.value || '').trim();
  if(!text) return;

  // Dividir por comas y procesar cada palabra individualmente
  const newWords = text.split(',')
    .map(word => word.trim())  // quitar espacios al inicio y final de cada palabra
    .filter(word => word.length > 0);  // filtrar palabras vacías

  // Agregar todas las nuevas palabras evitando duplicados
  words = Array.from(new Set([...words, ...newWords]));
  input.value = '';
  renderWordList();
}

function startGame(){
  playerCount = parseInt(($('playerCount').value||'0'),10);
  impostorCount = parseInt(($('impostorCount').value||'0'),10);

  // Validaciones
  if(words.length === 0){
    alert('Agregá al menos una palabra (o una categoría).');
    return;
  }
  if(isNaN(playerCount) || playerCount < 1 || playerCount > 20){
    alert('Número de jugadores inválido (1–20).');
    return;
  }
  if(isNaN(impostorCount) || impostorCount < 1 || impostorCount > 6){
    alert('Número de impostores inválido (1–6).');
    return;
  }
  if(impostorCount >= playerCount){
    alert('Debe haber al menos 1 jugador NO impostor.');
    return;
  }

  // Setup de roles
  players = [];
  impostors = [];
  currentPlayer = 0;

  const pool = Array.from({length: playerCount}, (_, i) => i);
  while(impostors.length < impostorCount){
    const idx = Math.floor(Math.random() * pool.length);
    impostors.push(pool.splice(idx,1)[0]);
  }

  const randomWord = words[Math.floor(Math.random()*words.length)];
  for(let i=0;i<playerCount;i++){
    players.push({
      name: `Jugador ${i+1}`,
      role: impostors.includes(i) ? 'Impostor' : 'Jugador',
      word: randomWord
    });
  }

  // Cambiar de pantalla: INICIO -> GAME
  hide('screen-setup');
  show('screen-game');
  updateOfflineGameUI();
}

// ===== FUNCIONES MODO OFFLINE =====
function updateOfflineGameUI() {
  $('playerLabel').innerText = players[currentPlayer].name;
  $('cardButton').innerText = 'Ver carta';
  $('cardButton').onclick = revealCard;
}

// ===== FLUJO: CARTAS =====
function revealCard(){
  if (isMultiplayer) {
    revealMyCard();
    return;
  }

  const p = players[currentPlayer];
  $('cardButton').innerText = (p.role === 'Impostor')
    ? '¡Eres el impostor!'
    : `La palabra es: ${p.word}`;
  $('cardButton').onclick = nextPlayer;
}

function nextPlayer(){
  if (isMultiplayer) {
    nextMultiplayerPlayer();
    return;
  }

  currentPlayer++;
  if(currentPlayer >= playerCount){
    goToEndScreen();
    return;
  }
  updateOfflineGameUI();
}

// ===== FLUJO: FINAL =====
function goToEndScreen(){
  hide('screen-game');
  show('screen-end');
}

// ===== RESET =====
function resetGame(){
  // limpiar estado
  words = [];
  players = [];
  currentPlayer = 0;
  playerCount = 0;
  impostorCount = 1;
  impostors = [];
  selectedCategories.clear();

  // limpiar UI
  $('wordList').innerText = '';
  $('wordInput').value = '';
  $('playerCount').value = '';
  $('impostorCount').value = '';

  // reactivar botones de niveles
  const btnP = $('btn-principiante');
  if(btnP){ btnP.disabled = false; btnP.textContent = '⭐ Nivel Principiante'; }

  const btnI = $('btn-intermedio');
  if(btnI){ btnI.disabled = false; btnI.textContent = '⚽ Nivel Intermedio'; }

  const btnD = $('btn-dificil');
  if(btnD){ btnD.disabled = false; btnD.textContent = '🔥 Nivel Difícil'; }

  const btnE = $('btn-estrella');
  if(btnE){ btnE.disabled = false; btnE.textContent = '🌟 Nivel Estrella'; }

  const btn412 = $('btn-cuatrodocedos');
  if(btn412){ btn412.disabled = false; btn412.textContent = '🏆 Nivel 412'; }

  hide('screen-end');
  hide('screen-game');
  show('screen-setup');
}