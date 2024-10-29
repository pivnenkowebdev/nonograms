import Model from "./model.js";
import View from "./view.js";

const MODEL = new Model();
const VIEW = new View(MODEL.defaultHint);

VIEW.renderListPictures(MODEL.getPicturesList("easy"));
VIEW.defaultRenderList(MODEL.defaultHint);

VIEW.elements.createContainers.burger.addEventListener("click", VIEW.burger);

VIEW.elements.createContainers.btnNightMode.addEventListener(
  "click",
  VIEW.nightMode
);

VIEW.elements.createContainers.level.addEventListener("click", (e) => {
  if (e.target.dataset.level) {
    const dataValue = e.target.dataset.level;
    VIEW.clearListPictures();
    VIEW.renderListPictures(MODEL.getPicturesList(dataValue));
    MODEL.level = dataValue;
  }
});

VIEW.elements.createContainers.initRowBtnStart.addEventListener("click", () => {
  const currentPicture = VIEW.elements.createContainers.pictureList.value;
  MODEL.statusGame = true;
  VIEW.clearGameZone();
  VIEW.clearTimer();
  VIEW.timerGo();
  VIEW.tableRender(MODEL.createHint(MODEL.getCurrentPicture(currentPicture)));
});

VIEW.elements.createContainers.gameAreaPicture.addEventListener(
  "click",
  (e) => {
    const cell = e.target.closest(".cell");

    const rows = document.querySelectorAll(".game-area__holder-cell");

    VIEW.activeCell(cell);

    const winTime = VIEW.win(MODEL.difference(MODEL.createCheckMatrix(rows)));

    if (!MODEL.statusGame) {
      const currentPicture = VIEW.elements.createContainers.pictureList.value;
      MODEL.statusGame = true;
      VIEW.clearGameZone();
      VIEW.clearTimer();
      VIEW.timerGo();
      VIEW.tableRender(
        MODEL.createHint(MODEL.getCurrentPicture(currentPicture))
      );
    }

    if (winTime) {
      MODEL.addWinner(winTime);
    }
  }
);

VIEW.elements.createContainers.gameAreaPicture.addEventListener(
  "contextmenu",
  (e) => {

    e.preventDefault();

    const cell = e.target.closest(".cell");

    VIEW.cross(cell);
  }
);

VIEW.elements.createContainers.initRowBtnRandom.addEventListener(
  "click",
  () => {
    const randomObj = MODEL.randomList(MODEL.allPictures);
    VIEW.clearGameZone();
    VIEW.tableRender(randomObj.randomCategory);
    VIEW.clearListPictures();
    VIEW.renderListPictures(randomObj.titlesForList);
    VIEW.defaultRenderList(randomObj.randomCategory);
    if (MODEL.statusGame) {
      MODEL.statusGame = false;
      VIEW.clearTimer();
    }
  }
);

VIEW.elements.createContainers.utulitiesRowBtnReset.addEventListener(
  "click",
  () => {
    if (MODEL.statusGame) {
      MODEL.statusGame = false;
      VIEW.clearTimer();
      VIEW.clearActiveGame();
    }
  }
);

VIEW.elements.createContainers.modalClose.addEventListener("click", () => {
  VIEW.clearModal();
  MODEL.statusGame = false;
});

VIEW.elements.createContainers.modalCloseRecords.addEventListener(
  "click",
  () => {
    VIEW.closeRecordsModal();
  }
);

VIEW.elements.createContainers.otherRowBtnSolutions.addEventListener(
  "click",
  () => {
    MODEL.statusGame = false;
    VIEW.clearTimer();
    VIEW.solutions();
  }
);

VIEW.elements.createContainers.otherRowBtnRecords.addEventListener(
  "click",
  () => {
    VIEW.showWinners(MODEL.winners);
  }
);

VIEW.elements.createContainers.utulitiesRowBtnSave.addEventListener(
  "click",
  () => {
    const header = "savedGame";
    const saveGame = {
      currentStateGame: MODEL.matrixState,
      currentHint: MODEL.defaultHint,
      time: {
        sec: VIEW.sec,
        min: VIEW.min,
      },
    };

    if (saveGame.currentStateGame) {
      alert("The game saved :)");
      MODEL.setItemLocalStorage(header, saveGame);
    }
  }
);

VIEW.elements.createContainers.utulitiesRowBtnLoad.addEventListener(
  "click",
  () => {
    const savedGame = MODEL.getSavedGame("savedGame");
    MODEL.defaultHint = savedGame.currentHint;

    if (!MODEL.statusGame) {
      MODEL.statusGame = true;
    }

    VIEW.clearGameZone();
    VIEW.clearTimer();
    VIEW.sec = savedGame.time.sec;
    VIEW.min = savedGame.time.min;
    VIEW.timerGo();

    VIEW.renderTitle(savedGame.currentHint.title);
    VIEW.tableRender(savedGame.currentHint);
    VIEW.recoveryMatrix(savedGame.currentStateGame);
  }
);

VIEW.elements.createContainers.soundBtn.addEventListener("click", () => {
  VIEW.soundBtn();
});
