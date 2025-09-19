function searchGames() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let games = document.querySelectorAll("#gameList li");

  games.forEach(game => {
    let text = game.textContent.toLowerCase();
    game.style.display = text.includes(input) ? "" : "none";
  });
}