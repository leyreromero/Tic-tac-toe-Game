const winnerData = () => {
  return `
    <div class="container-pl1">
        <div class="winner">
          <h1 class="winner-title" id="position-pl1">PLAYER 1, YOU WIN!</h1>
        </div>
        <div class="winner-text">
          <h1 class="winner-title" id="position-pl2">Welcome on board.</h1>
          <p></p>
        </div>
        <div class="but-2">
         
            <button id="btn-restart" class="but2-style">START AGAIN</button>
        </div>
      </div>
    `;
};

const renderWinner = () => {
  root.classList.remove("my-container");
  root.classList.add("my-container2");
  root.innerHTML = winnerData();
};

const winnerEvents = () => {
  document.getElementById("btn-restart").addEventListener("click", () => {
    root.classList.remove("my-container2");
    renderIndexInfo();
    indexEvents();
  });
};
