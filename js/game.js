const htmlCasillas = document.querySelectorAll(".col-board");
const mapCasillas = [];
let turn = true;

const secondInfo = () => {
  return `
    <!--Estructura juego-->
      <!--Cabecero-->
      <div class="top-case">
        <img src="../images/logo.png" class="imageLogo" />
      </div>
      <div class="case-1">
        <div class="player-1">
          <div class="info-player1">
            <h1 class="text-player" id="case-2">
            <div id="firstPlayer">${gameData.player1.name}</div>
            <img
              src="../images/${gameData.player1.name}.png"
              alt="${gameData.player1.name}"
              class="img-container"
            />
            </h1>
          </div>
        </div>
        <div class="board">
          <div class="fila">
            <div class="col-board">
            </div>
            <div class="col-board">
            </div>
            <div class="col-board">
            </div>
          </div>
          <div class="fila">
            <div class="col-board">
            </div>
            <div class="col-board">
            </div>
            <div class="col-board">
            </div>
          </div>
          <div class="fila">
            <div class="col-board">
            </div>
            <div class="col-board">
            </div>
            <div class="col-board">
            
            </div>
          </div>
        </div>
        <div class="player-2">
          <div class="info-player1">
            <h1 class="text-player" id="case-2">
            <div id="secondPlayer">${gameData.player2.name}</div>
              <img
                src="../images/${gameData.player2.name}.png"
                alt="${gameData.player2.name}"
                class="img-container"
              />
            </h1>
          </div>
        </div>
      </div>
    `;
};

const renderGame = () => {
  root.classList.add("my-container");
  root.innerHTML = secondInfo();
};
const clickGame = (x) => {
  let element = x.currentTarget;
  console.log(element);
  if ((element.innerHTML = " ")) {
    if (turn) {
      element.innerHTML = `<img src="../images/moneda.png" class="moneda" alt="moneda" />`;
      mapCasillas[element.id] = "y";
    } else {
      element.innerHTML = `<img src="../images/calavera.png" class="moneda" alt="moneda" />`;
      mapCasillas[element.id] = "x";
    }
    turn = !turn;
  }
  console.log(mapCasillas);
  checkPlay();
};

const checkPlay = (c) => {
  if (c == 1) {
    renderWinner();
    winnerEvents();
  } else {
    renderWinner();
    winnerEvents();
  }
};

const gameEvents = () => {
  const casillas = document.querySelectorAll(".col-board");
  for (casilla of casillas) {
    casilla.addEventListener("click", clickGame);
  }
};
