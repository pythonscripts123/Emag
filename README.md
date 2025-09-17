<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>emag — Play Games</title>
<link rel="stylesheet" href="css/styles.css" />
</head>
<body>
<header class="topbar">
<div class="brand">
<div class="logo">emag</div>
<div class="tag">play. compete. repeat.</div>
</div>
<nav>
<button class="nav-btn" data-game="hub">Home</button>
<button class="nav-btn" data-game="tictactoe">Tic-Tac-Toe</button>
<button class="nav-btn" data-game="memory">Memory</button>
<button class="nav-btn" data-game="snake">Snake</button>
<button class="nav-btn" data-game="minesweeper">Minesweeper</button>
</nav>
</header>

<main id="app">
<!-- Main (Hub) -->
<section id="hub" class="screen active">
<h1>Welcome to emag</h1>
<p>Pick a game and have fun — everything runs in your browser. Scores and best times are shown when available.</p>

<div class="games-grid">
<article class="game-card" data-game="tictactoe">
<h3>Tic-Tac-Toe</h3>
<p>Classic 3×3. Play vs another player on the same device.</p>
<button class="play-quick" data-game="tictactoe">Play</button>
</article>

<article class="game-card" data-game="memory">
<h3>Memory</h3>
<p>Flip cards and match pairs. Great for a quick challenge.</p>
<button class="play-quick" data-game="memory">Play</button>
</article>

<article class="game-card" data-game="snake">
<h3>Snake</h3>
<p>Gobble apples, grow long. Arrow keys to move.</p>
<button class="play-quick" data-game="snake">Play</button>
</article>

<article class="game-card" data-game="minesweeper">
<h3>Minesweeper</h3>
<p>Classic minesweeper. Clear the board without detonating mines.</p>
<button class="play-quick" data-game="minesweeper">Play</button>
</article>
</div>

<footer class="hub-footer">
<small>Tip: Use the nav buttons on top to switch between games anytime.</small>
</footer>
</section>

<!-- Tic-Tac-Toe screen -->
<section id="tictactoe" class="screen">
<h2>Tic-Tac-Toe</h2>
<div class="game-area">
<div id="ttt-board" class="ttt-board"></div>
<div class="controls">
<div id="ttt-status"></div>
<button id="ttt-reset">Reset</button>
</div>
</div>
</section>

<!-- Memory screen -->
<section id="memory" class="screen">
<h2>Memory</h2>
<div class="game-area">
<div id="memory-controls" class="controls">
<label>Grid:
<select id="mem-size">
<option value="8">4×4 (8 pairs)</option>
<option value="12">4×6 (12 pairs)</option>
</select>
</label>
<button id="mem-reset">New Game</button>
<div id="mem-stats" class="stat">Moves: 0</div>
</div>
<div id="mem-board" class="mem-board"></div>
</div>
</section>

<!-- Snake screen -->
<section id="snake" class="screen">
<h2>Snake</h2>
<div class="game-area snake-area">
<canvas id="snake-canvas" width="420" height="420"></canvas>
<div class="controls">
<div id="snake-score">Score: 0</div>
<div id="snake-status"></div>
<button id="snake-start">Start</button>
<button id="snake-reset">Reset</button>
<small>Use arrow keys or WASD</small>
</div>
</div>
</section>

<!-- Minesweeper screen -->
<section id="minesweeper" class="screen">
<h2>Minesweeper</h2>
<div class="game-area">
<div class="controls">
<label>Rows:
<select id="ms-rows">
<option value="8">8</option>
<option value="12">12</option>
</select>
</label>
<label>Cols:
<select id="ms-cols">
<option value="8">8</option>
<option value="12">12</option>
</select>
</label>
<label>Mines:
<select id="ms-mines">
<option value="10">10</option>
<option value="20">20</option>
<option value="30">30</option>
</select>
</label>
<button id="ms-reset">New Game</button>
<div id="ms-status" class="stat">Ready</div>
</div>

<div id="ms-board" class="ms-board"></div>
</div>
</section>
</main>

<script src="js/main.js"></script>
<script src="js/tictactoe.js"></script>
<script src="js/memory.js"></script>
<script src="js/snake.js"></script>
<script src="js/minesweeper.js"></script>
</body>
</html>
