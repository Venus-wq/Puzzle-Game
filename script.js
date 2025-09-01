const levelMap = document.getElementById("levelMap");
const gameUI = document.getElementById("gameUI");
const puzzle = document.getElementById("puzzle");
const hintImage = document.getElementById("hintImage");
const levelInfo = document.getElementById("levelInfo");
const timeDisplay = document.getElementById("time");
const movesDisplay = document.getElementById("moves");
const message = document.getElementById("message");

const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const hintBtn = document.getElementById("hintBtn");
const backBtn = document.getElementById("backBtn");

const GRID_SIZE = 3;
const TILE_SIZE = 100;

const levels = [
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1502980426475-b83966705988?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1516685018646-549f87d0bc4b?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1498819309212-5f177d45d24b?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1444522569479-4d1671aa8e92?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1451189388751-7af89a13a0f4?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb258?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=300&q=80"
  },
  {
    time: 60,
    image: "https://images.unsplash.com/photo-1439396087961-98bc12c21176?auto=format&fit=crop&w=300&q=80"
  },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/9/98/SpongeBob_SquarePants.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/6/6b/Patrick_Star.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/2/23/Squidward_Tentacles.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/d/d9/Mr_Krabs.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/7/7e/Chase.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/0/03/Marshall.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/e/ea/Rubble.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/c/cf/Skye.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/4/41/Ryder.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/3/38/Zuma.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/6/6a/Goku_Dragon_Ball_Super.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/f/f1/Vegeta_Dragon_Ball_Super.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/d/da/Gohan_Dragon_Ball_Z.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/c/c2/Frieza_DBZ.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/9/92/Piccolo_DBZ.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/4/49/Trunks_DBZ.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/solo-leveling/images/4/45/Sung_Jinwoo_Artwork.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/solo-leveling/images/c/c9/Cha_Ha-joon_Artwork.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/solo-leveling/images/e/ee/Antares_Artwork.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/solo-leveling/images/2/27/Igris_Artwork.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/solo-leveling/images/1/13/Taejin_Artwork.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/6/6a/Izuku_Midoriya_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/e/ee/Katsuki_Bakugo_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/3/35/All_Might_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/f/fb/Todoroki_Shodou_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/1/15/Ochaco_Uraraka_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/9/91/Naruto_Uzumaki.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/5/55/Sasuke_Uchiha.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/d/d8/Sakura_Haruno.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/2/2e/Kakashi_Hatake.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/7/7b/Hinata_Hyuga.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/8/81/Monkey_D_Luffy.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/1/1a/Roronoa_Zoro.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/4/4c/Nami.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/0/0d/Sanji.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/c/cf/Tony_Tony_Chopper.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/a/a1/Finn_the_Human.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/6/6d/Jake_the_Dog.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/e/e1/Princess_Bubblegum.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/c/c5/Marceline_the_Vampire_Queen.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/0/0b/BMO.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/rickandmorty/images/6/6e/Rick_Sanchez.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/rickandmorty/images/5/5f/Morty_Smith.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/rickandmorty/images/9/9f/Summer_Smith.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/rickandmorty/images/e/ef/Beth_Smith.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/stevenuniverse/images/3/3b/Steven_Quartz_Universe.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/stevenuniverse/images/2/27/Garnet_SU.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/stevenuniverse/images/1/1b/Pearl_SU.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/stevenuniverse/images/0/0a/Amethyst_SU.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/simpsons/images/7/7d/Homer_Simpson.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/simpsons/images/4/4c/Bart_Simpson.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/simpsons/images/9/9d/Lisa_Simpson.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/simpsons/images/3/31/Marge_Simpson.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/pixar/images/7/7b/Woody_Toy_Story.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/disney/images/4/4b/Mickey_Mouse.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/pixar/images/6/6e/Buzz_Lightyear.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/disney/images/3/3f/Donald_Duck.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/disney/images/7/77/Goofy.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/nickelodeon/images/3/34/Avatar_Aang.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/nickelodeon/images/8/88/Korra.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/3/31/AnimeGirl1.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/1/17/AnimeGirl2.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/a/a1/AnimeGirl3.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/0/0a/AnimeGirl4.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/8/8a/AnimeGirl5.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/b/b3/Sandy_Cheeks.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/0/0b/Pearl_Krabs.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/2/2b/Larry_Lobster.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/c/c5/Mermaid_Man.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/spongebob/images/a/aa/Barnacle_Boy.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/3/3f/Everest.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/5/5f/Trouble.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/paw-patrol/images/2/20/Rex.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/7/7a/Bulma_DBZ.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/dragonball/images/d/d5/Android_18_DBZ.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/7/7e/Eijiro_Kirishima_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/myheroacademia/images/0/0d/Shoto_Todoroki_Render.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/9/9f/Jiraiya.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/naruto/images/6/6d/Itachi_Uchiha.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/f/f6/Nico_Robin.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/onepiece/images/f/f3/Franky.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/c/cf/Lumpy_Space_Prince.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/adventuretime/images/3/3c/Ice_King.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/rickandmorty/images/9/97/Mr_Poopybutthole.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/stevenuniverse/images/d/d6/Connie_Maheswaran.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/simpsons/images/f/fb/Maggie_Simpson.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/disney/images/e/e3/Ariel.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/nickelodeon/images/9/9e/Zuko.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/f/fc/AnimeGirl6.png" },
  { time: 60, image: "https://static.wikia.nocookie.net/anime/images/8/89/AnimeGirl7.png" },
];

let currentLevel = 0;
let unlockedLevels = 1;
let moveCount = 0;
let timeLeft = 60;
let timer;
let gameActive = false;
let firstTile = null;

function buildLevelMap() {
  levelMap.innerHTML = "";
  levels.forEach((_, i) => {
    const btn = document.createElement("div");
    btn.classList.add("level-button");
    btn.textContent = i + 1;

    if (i >= unlockedLevels) {
      btn.classList.add("locked");
    } else {
      btn.addEventListener("click", () => startLevel(i));
    }

    levelMap.appendChild(btn);
  });
}

function startLevel(index) {
  currentLevel = index;
  const level = levels[index];

  moveCount = 0;
  movesDisplay.textContent = "Moves: 0";
  message.textContent = "";
  hintImage.src = level.image;
  hintImage.style.display = "none";
  gameActive = true;
  firstTile = null;
  timeLeft = level.time;
  timeDisplay.textContent = timeLeft;
  levelInfo.textContent = `Level: ${index + 1}`;
  submitBtn.disabled = false;

  levelMap.classList.add("hidden");
  gameUI.classList.remove("hidden");

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);

  puzzle.innerHTML = "";
  const positions = [...Array(GRID_SIZE * GRID_SIZE).keys()];
  shuffleArray(positions);

  for (let i = 0; i < positions.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.dataset.index = positions[i];
    tile.dataset.position = i;
    tile.style.width = TILE_SIZE + "px";
    tile.style.height = TILE_SIZE + "px";
    tile.style.backgroundImage = `url(${level.image})`;
    tile.style.backgroundPosition = getBackgroundPosition(positions[i]);
    tile.addEventListener("click", () => handleTileClick(tile));
    puzzle.appendChild(tile);
  }
}

function handleTileClick(tile) {
  if (!gameActive) return;

  if (!firstTile) {
    firstTile = tile;
    tile.classList.add("selected");
  } else if (tile === firstTile) {
    tile.classList.remove("selected");
    firstTile = null;
  } else {
    swapTiles(firstTile, tile);
    firstTile.classList.remove("selected");
    firstTile = null;
    moveCount++;
    movesDisplay.textContent = `Moves: ${moveCount}`;
  }
}

function swapTiles(t1, t2) {
  const temp = t1.dataset.index;
  t1.dataset.index = t2.dataset.index;
  t2.dataset.index = temp;

  t1.style.backgroundPosition = getBackgroundPosition(t1.dataset.index);
  t2.style.backgroundPosition = getBackgroundPosition(t2.dataset.index);
}

function getBackgroundPosition(index) {
  const x = (index % GRID_SIZE) * -TILE_SIZE;
  const y = Math.floor(index / GRID_SIZE) * -TILE_SIZE;
  return `${x}px ${y}px`;
}

function checkWin() {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).every(
    tile => tile.dataset.index === tile.dataset.position
  );
}

function endGame(won) {
  gameActive = false;
  clearInterval(timer);
  submitBtn.disabled = true;

  if (won) {
    message.textContent = "🎉 Puzzle Solved!";
    
    if (currentLevel + 1 === unlockedLevels && unlockedLevels < levels.length) {
      unlockedLevels++;
    }

    // After 2 seconds, automatically start next level if exists, otherwise show map
    setTimeout(() => {
      if (currentLevel + 1 < levels.length) {
        startLevel(currentLevel + 1);  // Start next level
      } else {
        message.textContent = "🎉 You completed all levels! 🎉";
        gameUI.classList.add("hidden");
        levelMap.classList.remove("hidden");
        buildLevelMap();
      }
    }, 2000);

  } else {
    message.textContent = "❌ Time's up or incorrect!";
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Button actions
submitBtn.addEventListener("click", () => {
  if (!gameActive) return;
  if (checkWin()) {
    endGame(true);
  } else {
    message.textContent = "❌ Puzzle not yet solved. Keep trying!";
  }
});

restartBtn.addEventListener("click", () => startLevel(currentLevel));

hintBtn.addEventListener("click", () => {
  const isVisible = hintImage.style.display === "inline-block";
  hintImage.style.display = isVisible ? "none" : "inline-block";
  hintBtn.textContent = isVisible ? "💡 Hint" : "❌ Hide Hint";
});

backBtn.addEventListener("click", () => {
  clearInterval(timer);
  gameUI.classList.add("hidden");
  levelMap.classList.remove("hidden");
  buildLevelMap();
});

// Init
buildLevelMap();
// Existing code assumed to be above...

const devUnlockBtn = document.getElementById("devUnlockBtn");

devUnlockBtn.addEventListener("click", () => {
  const pin = prompt("Enter PIN to unlock level:");

  if (pin === "159875") {
    if (unlockedLevels < levels.length) {
      unlockedLevels++;
      alert("✅ One level has been unlocked.");
      buildLevelMap();
    } else {
      alert("🎉 All levels are already unlocked.");
    }
  } else {
    alert("❌ Incorrect PIN.");
  }
});

// Initialize the level map
buildLevelMap();

