// Erstellen des Canvas-Elements und des Kontexts
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Festlegen der Größe des Canvas
canvas.width = 1540;
canvas.height = 770;

// Hinzufügen des Canvas zum HTML-Dokument
document.body.appendChild(canvas);

// Definieren der Spielparameter
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;
const PLAYER_JUMP_SPEED = -10;
const PLAYER_GRAVITY = 1;
const PLAYER_MOVE_SPEED = 5;
const BG_COLOR = '#c8e6ff';
const LAVA_COLOR = '#ff0000';
const GROUND_COLOR = '#8b4513';

// Spielerposition und Status
let playerX = 50;
let playerY = 250;
let jumpCounter = 0;
let isOnGround = false;
let collectedCoins = 0;

// Funktion zum Zeichnen des Spielers
function drawPlayer() {
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(playerX, playerY, PLAYER_WIDTH, PLAYER_HEIGHT);
}

// Funktion zum Zeichnen der Lava
function drawLava() {
    ctx.fillStyle = LAVA_COLOR;
    ctx.fillRect(500, HEIGHT - 61, 200, 61);
    ctx.fillRect(800, HEIGHT - 61, 100, 61);
}

// Funktion zum Zeichnen des Bodens
function drawGround() {
    ctx.fillStyle = GROUND_COLOR;
    ctx.fillRect(0, HEIGHT - 60, WIDTH, 60);
}

// Funktion zum Zeichnen der Münzen
function drawCoins() {
    // Zeichnen der Münzen hier
}

// Funktion zum Aktualisieren des Spiels
function update() {
    // Bewegung des Spielers
    if (!isOnGround) {
        playerY += PLAYER_GRAVITY;
    }
    
    // Kollision des Spielers mit dem Boden
    if (playerY + PLAYER_HEIGHT >= HEIGHT - 60) {
        isOnGround = true;
        playerY = HEIGHT - 60 - PLAYER_HEIGHT;
    } else {
        isOnGround = false;
    }
}

// Funktion zum Zeichnen des gesamten Spiels
function draw() {
    // Löschen des Canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Hintergrund zeichnen
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Boden, Spieler, Lava und Münzen zeichnen
    drawGround();
    drawPlayer();
    drawLava();
    drawCoins();

    // Anzeige der eingesammelten Münzen
    ctx.fillStyle = '#000';
    ctx.font = '24px Arial';
    ctx.fillText(`Münzen: ${collectedCoins}`, 10, 30);
}

// Spiel-Loop-Funktion
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Event-Listener für Tastatureingaben
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Tastatureingaben verarbeiten
    if ((key === ' ' || key === 'ArrowUp') && isOnGround) {
        jumpCounter = 10;
        isOnGround = false;
    }
    if (key === 'ArrowDown') {
        playerY += PLAYER_MOVE_SPEED;
    }
    if (key === 'ArrowLeft') {
        playerX -= PLAYER_MOVE_SPEED;
    }
    if (key === 'ArrowRight') {
        playerX += PLAYER_MOVE_SPEED;
    }
});

// Spiel-Loop starten
gameLoop();
   