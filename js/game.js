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
            <div id="0" class="col-board">
            </div>
            <div id="1" class="col-board">
            </div>
            <div id="2" class="col-board">
            </div>
          </div>
          <div class="fila">
            <div id="3" class="col-board">
            </div>
            <div id="4" class="col-board">
            </div>
            <div id="5" class="col-board">
            </div>
          </div>
          <div class="fila">
            <div id="6" class="col-board">
            </div>
            <div id="7" class="col-board">
            </div>
            <div id="8" class="col-board">
            
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

const checkPlay = (playerTurn, winnerArray) => {
  const checkWinner = () => {
    if (playerTurn == "y") {
      gameData.winner = gameData.player1.name;
      renderWinner();
      winnerEvents();
    } else if (playerTurn == "x") {
      gameData.winner = gameData.player2.name;
      renderWinner();
      winnerEvents();
    }
  };
  if (
    winnerArray[0] == playerTurn &&
    winnerArray[1] == playerTurn &&
    winnerArray[2] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[3] == playerTurn &&
    winnerArray[4] == playerTurn &&
    winnerArray[5] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[6] == playerTurn &&
    winnerArray[7] == playerTurn &&
    winnerArray[8] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[0] == playerTurn &&
    winnerArray[3] == playerTurn &&
    winnerArray[6] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[1] == playerTurn &&
    winnerArray[4] == playerTurn &&
    winnerArray[7] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[2] == playerTurn &&
    winnerArray[5] == playerTurn &&
    winnerArray[8] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[0] == playerTurn &&
    winnerArray[4] == playerTurn &&
    winnerArray[8] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[2] == playerTurn &&
    winnerArray[4] == playerTurn &&
    winnerArray[6] == playerTurn
  ) {
    checkWinner();
  } else if (
    winnerArray[0] != undefined &&
    winnerArray[1] != undefined &&
    winnerArray[2] != undefined &&
    winnerArray[3] != undefined &&
    winnerArray[4] != undefined &&
    winnerArray[5] != undefined &&
    winnerArray[6] != undefined &&
    winnerArray[7] != undefined &&
    winnerArray[8] != undefined
  ) {
    renderDraw();
    drawEvents();
  }
};

const gameEvents = () => {
  const mapCasillas = [];
  let turn = true;
  const casillas = document.querySelectorAll(".col-board");

  const clickGame = (element) => {
    console.log(element);
    if ((element.innerHTML = " ")) {
      if (turn) {
        element.innerHTML = `<img src="../images/moneda.png" class="moneda" alt="moneda" />`;
        mapCasillas[element.id] = "y";
      } else {
        element.innerHTML = `<img src="../images/calavera.png" class="moneda" alt="calavera" />`;
        mapCasillas[element.id] = "x";
      }
      turn = !turn;
      console.log(mapCasillas);
      checkPlay(mapCasillas[element.id], mapCasillas);
    }
  };

  for (casilla of casillas) {
    casilla.addEventListener("click", (event) => {
      const boardSquare = event.target;
      clickGame(boardSquare);
    });
  }
};
