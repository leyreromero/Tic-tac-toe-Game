const root = document.getElementById("root");

const gameData = {
  player1: {
    name: null,
    image: null,
  },
  player2: {
    name: null,
    image: null,
  },
  winner: null,
};

const mainPageHTML = () => {
  return ` 
  <!--Cabecero-->
      <div class="top-case">
        <img src="./images/logo.png" class="imageLogo" />
      </div>
      <!--Estructura juego-->
      <div class="main-case">
        <div class="players">
          <div class="instructions">
            <h1 class="main-title">PLAYERS INSTRUCTIONS</h1>
          </div>
          <div class="player-mod">
            <h2 class="second-title">PLAYER VS PLAYER</h2>
            <div class="text-info">
              <p>
                On player vs player you will be competing against your friends,
                write your names and start playing!
              </p>
            </div>
          </div>
          <div class="player-mod">
            <h2 class="second-title">PLAYER VS PC</h2>
            <div>
              <p class="text-info">
                On player vs PC you will be playing against a computer. Are you
                ready?
              </p>
            </div>
          </div>
        </div>

        <div class="rules">
          <h1 class="main-title" id="rules-title">GAME INFO</h1>
          <div class="text-box">
            <h2 class="second-title">Welcome to Pirates of the TIC TAC TOE.</h2>
            <p class="text-info" id="text-media">
              Each player will choose a team to make their move. Making only one
              move per turn. The one who manages to make a line be it vertical,
              horizontal or diagonal wins.
            </p>
            <div class="flag-box">
              <img src="./images/piratabandera.png" alt="" class="flag-img" />
            </div>
          </div>
        </div>
        <div class="boat-case">
          <button class="play-bot" id="but-play">PLAY</button>
          <img src="./images/barco.png" alt="pirate ship" class="boat-img" />
        </div>
      </div>

      <!-- The Modal -->
      <div id="myModal-play" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="pl-pc">
            <h1 class="main-title">SELECT A MODE</h1>
            <div class="characters-img">
              <p class="text-info">PLAYER 1</p>
              <div class="char-container">
                <img src="/images/pc.png" alt="Pc" class="img-container" 
                id="character1-pc"/>
                <img
                  src="/images/jack.png"
                  alt="Jack"
                  class="img-container"
                  id="character1-jack"
                />
                <img
                  src="/images/elisabeth.png"
                  alt="Elisabeth"
                  class="img-container"
                  id="character1-elisabeth"
                />
                <img
                  src="/images/davy.png"
                  alt="Davy"
                  class="img-container"
                  id="character1-davy" 
                />
                <img
                  src="/images/will.png"
                  alt="Will"
                  class="img-container"
                  id="character1-will"
                />
              </div>
              <div class="characters-img">
                <p class="text-info">PLAYER 2</p>
                <div class="char-container">
                  <img src="/images/pc.png" alt="Pc" class="img-container" 
                  id="character2-pc"/>
                  <img
                    src="/images/jack.png"
                    alt="Jack"
                    class="img-container"
                    id="character2-jack"
                  />
                  <img
                    src="/images/elisabeth.png"
                    alt="Elisabeth"
                    class="img-container"
                    id="character2-elisabeth"
                  />
                  <img
                    src="/images/davy.png"
                    alt="Davy"
                    class="img-container"
                    id="character2-davy"
                  />
                  <img
                    src="/images/will.png"
                    alt="Will"
                    class="img-container"
                    id="character2-will"
                  />
                </div>
              </div>
            </div>
            <button class="go-bot" id="go-button">
              GO!
            </button>
          </div>
        </div>
      </div>
  `;
};

const renderMainPageHTML = () => {
  root.innerHTML = mainPageHTML();
};

const addListeners = () => {
  addListenerToStartGame();
  addFirstPlayerListeners();
  addSecondPlayerListeners();
};

const addListenerToStartGame = () => {
  document.getElementById("go-button").addEventListener("click", () => {
    renderGame();
    gameEvents();
  });
};

const addFirstPlayerListeners = () => {
  const firstPlayerImages = document.querySelectorAll('[id^="character1"]');
  firstPlayerImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      gameData.player1.name = event.target.alt;
      image.classList.add("selectedImage");
      image.classList.remove("img-container");
    });
  });
};

const addSecondPlayerListeners = () => {
  const secondPlayerImages = document.querySelectorAll('[id^="character2"]');
  secondPlayerImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      gameData.player2.name = event.target.alt;
      image.classList.add("selectedImage");
      image.classList.remove("img-container");
    });
  });
};

renderMainPageHTML();
addListeners();

// modal
var modal = document.getElementById("myModal-play");

// Get the button that opens the modal
var btn = document.getElementById("but-play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
