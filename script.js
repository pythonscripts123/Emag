function searchGames() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let games = document.querySelectorAll("#gameList li");

  games.forEach(game => {
    let text = game.textContent.toLowerCase();
    game.style.display = text.includes(input) ? "" : "none";
  });
}

// Dino Game Modal Logic
document.getElementById('openDinoBtn').onclick = function(e) {
  e.preventDefault();
  document.getElementById('dinoModal').style.display = 'block';
  // Reload the iframe to reset the game each time
  document.getElementById('dinoFrame').src = document.getElementById('dinoFrame').src;
};

document.getElementById('closeDino').onclick = function() {
  document.getElementById('dinoModal').style.display = 'none';
};

window.onclick = function(event) {
  const modal = document.getElementById('dinoModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};