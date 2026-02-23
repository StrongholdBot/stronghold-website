document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-feature-grid]");
  if (!grid) return;

  const tiles = Array.from(grid.querySelectorAll("a.feature-tile"));
  if (!tiles.length) return;

  const sections = tiles
    .map(tile => {
      const target = tile.getAttribute("href");
      if (!target || !target.startsWith("#")) return null;
      return document.getElementById(target.slice(1));
    })
    .filter(Boolean);

  if (!sections.length) {
    console.warn("No valid sections found for feature tiles");
    return;
  };

  const tileById = new Map(
    tiles.map(tile => [tile.getAttribute("href").slice(1), tile])
  );
  for (const t of tiles) {
    t.addEventListener("click", e => {
      setActive(e.target.getAttribute("href").slice(1));
    });
  }

  const setActive = id => {
    tiles.forEach(tile => tile.classList.remove("is-active"));
    const active = tileById.get(id);
    if (active) active.classList.add("is-active");
  };
});