import moon from "../img/moon.svg";
import sun from "../img/sun.svg";
import cellOpen from "../sounds/open.mp3";
import cross from "../sounds/cross.mp3";
import empty from "../sounds/empty.mp3";
import victory from "../sounds/victory.mp3";

export default class View {
  constructor(defaultHint) {
    this.initialRender();
    this.tableRender(defaultHint);
    this.renderTitle(defaultHint.title);
    this.isTimer;
    this.min = 0;
    this.sec = 0;
  }

  elements = {
    createContainers: {
      // audio
      audio: document.createElement("audio"),

      // menu
      menu: document.createElement("div"),
      menuTop: document.createElement("div"),

      // level
      level: document.createElement("div"),
      levelTitle: document.createElement("p"),
      levelRow: document.createElement("div"),
      levelBtnFirst: document.createElement("button"),
      levelBtnSecond: document.createElement("button"),
      levelBtnThird: document.createElement("button"),

      // picture
      picture: document.createElement("div"),
      pictureTitle: document.createElement("p"),
      pictureRow: document.createElement("div"),
      pictureList: document.createElement("select"),
      pictureListItem: document.createElement("option"),

      // utulities
      utulitiesRow: document.createElement("div"),
      utulitiesRowBtnSave: document.createElement("button"),
      utulitiesRowBtnLoad: document.createElement("button"),
      utulitiesRowBtnReset: document.createElement("button"),

      // solutions & records
      otherRow: document.createElement("div"),
      otherRowBtnSolutions: document.createElement("button"),
      otherRowBtnRecords: document.createElement("button"),

      // start
      initRow: document.createElement("div"),
      initRowBtnStart: document.createElement("button"),
      initRowBtnRandom: document.createElement("button"),

      // burger
      burger: document.createElement("button"),
      burgerLine: document.createElement("span"),

      // night mode
      btnNightMode: document.createElement("button"),
      btnNightModeRow: document.createElement("span"),
      btnNightModeImgSun: document.createElement("img"),
      btnNightModeImgMoon: document.createElement("img"),

      // basic
      body: document.querySelector("body"),
      main: document.createElement("main"),
      playZone: document.createElement("section"),
      container: document.createElement("div"),
      playZoneContent: document.createElement("div"),

      // play zone
      gameArea: document.createElement("div"),
      gameAreaWrapper: document.createElement("div"),
      columnClue: document.createElement("div"),
      rowClue: document.createElement("div"),
      gameAreaPicture: document.createElement("div"),
      closeFade: document.createElement("div"),

      // timer
      timerWrapper: document.createElement("section"),
      timer: document.createElement("div"),
      timerMin: document.createElement("span"),
      timerSec: document.createElement("span"),
      timerSemiColon: document.createElement("span"),

      // title
      title: document.createElement("div"),

      // modal win
      fade: document.createElement("div"),
      modal: document.createElement("div"),
      modalClose: document.createElement("button"),

      // modal records
      fadeRecords: document.createElement("div"),
      modalRecords: document.createElement("div"),
      modalCloseRecords: document.createElement("button"),

      // sound btn
      soundBtn: document.createElement("button"),
    },
  };

  initialRender = () => {
    // audio

    this.elements.createContainers.body.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.audio
    );
    this.elements.createContainers.audio.className = "audio";

    // night mode
    this.elements.createContainers.btnNightModeRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.btnNightModeImgSun
    );

    this.elements.createContainers.btnNightModeRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.btnNightModeImgMoon
    );

    this.elements.createContainers.btnNightModeImgSun.className =
      "btn-night-mode__img";
    this.elements.createContainers.btnNightModeImgMoon.className =
      "btn-night-mode__img";

    this.elements.createContainers.btnNightModeImgMoon.src = moon;

    this.elements.createContainers.btnNightModeImgSun.src = sun;

    this.elements.createContainers.btnNightMode.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.btnNightModeRow
    );
    this.elements.createContainers.btnNightModeRow.className =
      "btn-night-mode__row";

    this.elements.createContainers.menuTop.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.btnNightMode
    );
    this.elements.createContainers.btnNightMode.className = "btn-night-mode";

    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.menuTop
    );
    this.elements.createContainers.menuTop.className = "menu__top";

    // level
    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.level
    );
    this.elements.createContainers.level.className = "level";

    this.elements.createContainers.level.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.levelTitle
    );
    this.elements.createContainers.levelTitle.className = "level__title";
    this.elements.createContainers.levelTitle.innerText = "Level";

    this.elements.createContainers.level.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.levelRow
    );
    this.elements.createContainers.levelRow.className = "level__row";

    this.elements.createContainers.levelRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.levelBtnFirst
    );
    this.elements.createContainers.levelBtnFirst.innerText = "Easy";
    this.elements.createContainers.levelBtnFirst.className =
      "level__btn action-element";
    this.elements.createContainers.levelBtnFirst.dataset.level = "easy";

    this.elements.createContainers.levelRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.levelBtnSecond
    );
    this.elements.createContainers.levelBtnSecond.innerText = "Medium";
    this.elements.createContainers.levelBtnSecond.className =
      "level__btn action-element";
    this.elements.createContainers.levelBtnSecond.dataset.level = "medium";

    this.elements.createContainers.levelRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.levelBtnThird
    );
    this.elements.createContainers.levelBtnThird.innerText = "Hard";
    this.elements.createContainers.levelBtnThird.className =
      "level__btn action-element";
    this.elements.createContainers.levelBtnThird.dataset.level = "hard";

    // picture
    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.picture
    );
    this.elements.createContainers.picture.className = "hint-picture";

    this.elements.createContainers.picture.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.pictureTitle
    );
    this.elements.createContainers.pictureTitle.className =
      "hint-picture__title";
    this.elements.createContainers.pictureTitle.innerText = "Select a task";

    this.elements.createContainers.picture.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.pictureList
    );
    this.elements.createContainers.pictureList.className =
      "hint-picture__list action-element";

    // start
    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.initRow
    );
    this.elements.createContainers.initRow.className = "init-row";

    this.elements.createContainers.initRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.initRowBtnStart
    );
    this.elements.createContainers.initRowBtnStart.className =
      "init-row__btn-start action-element";
    this.elements.createContainers.initRowBtnStart.innerText = "Start";

    this.elements.createContainers.initRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.initRowBtnRandom
    );
    this.elements.createContainers.initRowBtnRandom.className =
      "init-row__btn-random action-element";
    this.elements.createContainers.initRowBtnRandom.innerText = "Random";

    // utilities
    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.utulitiesRow
    );
    this.elements.createContainers.utulitiesRow.className = "utilities-row";

    this.elements.createContainers.utulitiesRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.utulitiesRowBtnSave
    );
    this.elements.createContainers.utulitiesRowBtnSave.className =
      "utilities-row__btn-save action-element";
    this.elements.createContainers.utulitiesRowBtnSave.innerText = "Save";

    this.elements.createContainers.utulitiesRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.utulitiesRowBtnLoad
    );
    this.elements.createContainers.utulitiesRowBtnLoad.className =
      "utilities-row__btn-load action-element";
    this.elements.createContainers.utulitiesRowBtnLoad.innerText = "Load";

    this.elements.createContainers.utulitiesRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.utulitiesRowBtnReset
    );
    this.elements.createContainers.utulitiesRowBtnReset.className =
      "utilities-row__btn-reset action-element";
    this.elements.createContainers.utulitiesRowBtnReset.innerText = "Reset";

    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.otherRow
    );
    this.elements.createContainers.otherRow.className = "other-row";

    this.elements.createContainers.otherRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.otherRowBtnSolutions
    );
    this.elements.createContainers.otherRowBtnSolutions.className =
      "other-row__btn-solution action-element";
    this.elements.createContainers.otherRowBtnSolutions.innerText = "Solutions";

    this.elements.createContainers.otherRow.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.otherRowBtnRecords
    );
    this.elements.createContainers.otherRowBtnRecords.className =
      "other-row__btn-records action-element";
    this.elements.createContainers.otherRowBtnRecords.innerText = "Records";

    // soun btn
    this.elements.createContainers.menu.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.soundBtn
    );
    this.elements.createContainers.soundBtn.className =
      "sound-btn action-element";

    // burger
    this.elements.createContainers.burger.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.burgerLine
    );
    this.elements.createContainers.burgerLine.className = "burger__line";

    this.elements.createContainers.body.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.burger
    );
    this.elements.createContainers.burger.className = "burger";

    // menu
    this.elements.createContainers.body.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.menu
    );
    this.elements.createContainers.menu.className = "menu";

    // clues
    this.elements.createContainers.rowClue.className = "game-area__row-clue";
    this.elements.createContainers.gameArea.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.rowClue
    );

    this.elements.createContainers.columnClue.className =
      "game-area__column-clue";
    this.elements.createContainers.gameAreaWrapper.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.columnClue
    );

    // game area
    this.elements.createContainers.gameArea.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.gameAreaWrapper
    );
    this.elements.createContainers.gameAreaWrapper.className =
      "game-area__wrapper";

    this.elements.createContainers.gameArea.className = "game-area";
    this.elements.createContainers.gameAreaWrapper.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.gameAreaPicture
    );
    this.elements.createContainers.gameAreaPicture.className =
      "game-area__picture";

    this.elements.createContainers.gameArea.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.closeFade
    );
    this.elements.createContainers.closeFade.className =
      "game-area__close-fade";

    // basic wrappers
    this.elements.createContainers.playZoneContent.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.gameArea
    );
    this.elements.createContainers.playZoneContent.className =
      "play-zone__content";

    this.elements.createContainers.container.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.playZoneContent
    );
    this.elements.createContainers.container.className = "container";

    this.elements.createContainers.playZone.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.container
    );
    this.elements.createContainers.playZone.className = "play-zone";

    this.elements.createContainers.main.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.playZone
    );
    this.elements.createContainers.main.className = "main";

    this.elements.createContainers.body.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.main
    );

    // timer
    this.elements.createContainers.body.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.timerWrapper
    );
    this.elements.createContainers.timerWrapper.className = "timer-wrapper";

    this.elements.createContainers.timerWrapper.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.timer
    );
    this.elements.createContainers.timer.className = "timer-wrapper__timer";

    this.elements.createContainers.timer.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.timerMin
    );
    this.elements.createContainers.timerMin.className = "timer-wrapper__min";
    this.elements.createContainers.timerMin.innerText = "00";

    this.elements.createContainers.timer.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.timerSemiColon
    );
    this.elements.createContainers.timerSemiColon.className =
      "timer-wrapper__semicolon";
    this.elements.createContainers.timerSemiColon.innerText = ":";

    this.elements.createContainers.timer.insertAdjacentElement(
      "beforeend",
      this.elements.createContainers.timerSec
    );
    this.elements.createContainers.timerSec.className = "timer-wrapper__sec";
    this.elements.createContainers.timerSec.innerText = "00";

    // title
    this.elements.createContainers.playZoneContent.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.title
    );
    this.elements.createContainers.title.className = "title";

    // modal
    this.elements.createContainers.body.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.fade
    );
    this.elements.createContainers.fade.className = "fade";

    this.elements.createContainers.fade.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.modal
    );
    this.elements.createContainers.modal.className = "modal";

    this.elements.createContainers.modal.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.modalClose
    );
    this.elements.createContainers.modalClose.className = "modal__close";

    // records
    this.elements.createContainers.body.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.fadeRecords
    );
    this.elements.createContainers.fadeRecords.className = "fade fade--records";

    this.elements.createContainers.fadeRecords.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.modalRecords
    );
    this.elements.createContainers.modalRecords.className =
      "modal modal--records";

    this.elements.createContainers.modalRecords.insertAdjacentElement(
      "afterbegin",
      this.elements.createContainers.modalCloseRecords
    );
    this.elements.createContainers.modalCloseRecords.className =
      "modal__close modal__close--records";
  };

  tableRender = (defaultHint) => {
    const pic = defaultHint.currentObj;
    this.elements.createContainers.closeFade.classList.remove("active");
    for (let i = 0; i < pic.length; i++) {
      // создаю ряды
      const row = document.createElement("div");
      row.className = "game-area__row";
      this.elements.createContainers.gameAreaPicture.insertAdjacentElement(
        "beforeend",
        row
      );

      // создаю обёртку для ячеек
      const holderCell = document.createElement("div");
      holderCell.className = "game-area__holder-cell";
      row.insertAdjacentElement("beforeend", holderCell);

      // создаю клеточки
      for (let k = 0; k < pic[i].length; k++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        const cellFront = document.createElement("div");
        cellFront.className = "cell__front";

        const cellBack = document.createElement("div");
        cellBack.className = "cell__back";

        cell.insertAdjacentElement("beforeend", cellFront);
        cell.insertAdjacentElement("beforeend", cellBack);

        if (pic[i][k] !== 0) {
          cell.classList.add("true");
        }

        holderCell.insertAdjacentElement("beforeend", cell);
      }
    }

    this.rowCluesRender(defaultHint.rowClues);
    this.columnCluesRender(defaultHint.columnClues);
    this.renderTitle(defaultHint.title);
  };

  rowCluesRender = (rowClues) => {
    for (let i = 0; i < rowClues.length; i++) {
      const cellClue = document.createElement("div");
      cellClue.className = "game-area__cell-clue game-area__cell-clue--row";

      for (let k = 0; k < rowClues[i].length; k++) {
        cellClue.innerText = rowClues[i].join(",").replace(
          /,0|0,|0/gi,

          " "
        );
        this.elements.createContainers.rowClue.insertAdjacentElement(
          "beforeend",
          cellClue
        );
      }
    }
  };

  columnCluesRender = (columnClues) => {
    for (let i = 0; i < columnClues.length; i++) {
      const cellClue = document.createElement("div");
      cellClue.className = "game-area__cell-clue game-area__cell-clue--column";

      for (let k = 0; k < columnClues[i].length; k++) {
        cellClue.innerText = columnClues[i].join(" ").replace(
          /,0|0,|0/gi,

          " "
        );
        this.elements.createContainers.columnClue.insertAdjacentElement(
          "beforeend",
          cellClue
        );
      }
    }
  };

  burger = () => {
    this.elements.createContainers.burger.classList.toggle("active");
    this.elements.createContainers.menu.classList.toggle("open");
  };

  nightMode = () => {
    this.elements.createContainers.burgerLine.style.transition = "0s";
    this.elements.createContainers.body.classList.toggle("night-mode");

    setTimeout(() => {
      this.elements.createContainers.burgerLine.style.transition =
        "0.2s 0.5s ease-in-out";
    }, 400);
  };

  renderListPictures = (arrPicTitles) => {
    arrPicTitles.forEach((title) => {
      const listItem = document.createElement("option");
      listItem.className = "hint-picture__list-item";
      listItem.value = `${title}`;
      listItem.innerText = `${title}`.toLocaleUpperCase();

      this.elements.createContainers.pictureList.insertAdjacentElement(
        "beforeend",
        listItem
      );
    });
  };

  defaultRenderList = (defaultHint) => {
    const title = (document.querySelector(
      `.hint-picture__list option[value = "${defaultHint.title}"]`
    ).selected = true);

    return title;
  };

  clearListPictures = () => {
    document
      .querySelectorAll(".hint-picture__list-item")
      .forEach((listItem) => {
        listItem.remove();
      });
  };

  clearGameZone = () => {
    document.querySelectorAll(".game-area__cell-clue").forEach((listItem) => {
      listItem.remove();
    });

    document.querySelectorAll(".game-area__row").forEach((listItem) => {
      listItem.remove();
    });
  };

  activeCell = (cell) => {
    if (cell.classList.contains("cross")) {
      cell.classList.remove("cross");
      cell.classList.toggle("active");
      this.sound(cellOpen);
    } else if (cell.classList.contains("active")) {
      cell.classList.remove("active");
      this.sound(empty);
    } else {
      cell.classList.add("active");
      this.sound(cellOpen);
    }
  };

  cross = (cell) => {
    if (cell.classList.contains("cross")) {
      cell.classList.remove("cross");
      this.sound(empty);
    } else {
      cell.classList.remove("active");
      cell.classList.add("cross");
      this.sound(cross);
    }
  };

  timeCounter = () => {
    this.sec++;
    this.renderTimer(this.sec);
  };

  timerGo = () => {
    this.isTimer = setInterval(this.timeCounter, 1000);
  };

  renderTimer = (sec) => {
    if (sec > 59) {
      this.sec = 0;
      this.min++;

      this.elements.createContainers.timerMin.innerText = String(
        this.min
      ).padStart(2, "0");
    }

    this.elements.createContainers.timerSec.innerText = String(
      this.sec
    ).padStart(2, "0");
  };

  clearTimer = () => {
    clearInterval(this.isTimer);
    this.sec = 0;
    this.elements.createContainers.timerMin.innerText = "00";
    this.elements.createContainers.timerSec.innerText = "00";
  };

  clearActiveGame = () => {
    const cell = document.querySelectorAll(".cell");

    cell.forEach((cell) => {
      if (cell.classList.contains("active")) {
        cell.classList.remove("active");
      }

      if (cell.classList.contains("cross")) {
        cell.classList.remove("cross");
      }
    });
  };

  renderTitle = (currentTitle) => {
    const title = document.querySelector(".title");
    title.innerText = currentTitle;
  };

  win = (diff) => {
    if (diff) {
      this.elements.createContainers.fade.classList.add("open");

      const sec = this.elements.createContainers.timerSec.innerText;
      const min = this.elements.createContainers.timerMin.innerText;

      const stringTime = `
      <p class="modal__text">
        Great! You have solved the nonogram in <span class="modal__time">${min}</span>:<span class="modal__time">${sec}</span> seconds!
      </p>
      `;

      this.elements.createContainers.modal.insertAdjacentHTML(
        "afterbegin",
        stringTime
      );

      this.clearTimer();
      this.clearActiveGame();

      setTimeout(() => {
        this.sound(victory);
      }, 100);

      return { min, sec };
    }
  };

  clearModal = () => {
    this.elements.createContainers.fade.classList.remove("open");
    document.querySelector(".modal__text").remove();
  };

  solutions = () => {
    const truesCell = document.querySelectorAll(".cell.true");
    const cell = document.querySelectorAll(".cell");
    this.elements.createContainers.closeFade.classList.add("active");

    cell.forEach((cell) => {
      if (cell.classList.contains("cross")) {
        cell.classList.remove("cross");
      }

      if (cell.classList.contains("active")) {
        cell.classList.remove("active");
      }
    });

    truesCell.forEach((cell) => {
      cell.classList.add("active");
    });
  };

  showWinners = (winners) => {
    this.elements.createContainers.fadeRecords.classList.add("open");

    this.elements.createContainers.modalRecords
      .querySelectorAll(".modal-win-item")
      .forEach((item) => {
        item.remove();
      });

    winners.forEach((item) => {
      const stringTime = `
        <p class="modal-win-item">
        <span class = 'modal-win-item__title modal-win-text'>${item.title}</span>
        <span class = 'modal-win-item__level modal-win-text'>${item.level}</span>
        <span class = 'modal-win-item__time modal-win-text'>${item.time.min}:${item.time.sec}</span>
        </p>
      `;

      this.elements.createContainers.modalRecords.insertAdjacentHTML(
        "beforeend",
        stringTime
      );
    });
  };

  closeRecordsModal = () => {
    this.elements.createContainers.fadeRecords.classList.remove("open");
  };

  sound = (sound) => {
    this.elements.createContainers.audio.src = `${sound}`;
    this.elements.createContainers.audio.play();
  };

  recoveryMatrix = (matrix) => {
    const rows = document.querySelectorAll(".game-area__holder-cell");
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i].querySelectorAll(".cell");
      for (let k = 0; k < row.length; k++) {
        if (matrix[i][k] === 1) {
          row[k].classList.add("active");
        }
      }
    }
  };

  soundBtn = () => {
    this.elements.createContainers.soundBtn.classList.toggle("off");
    if (this.elements.createContainers.soundBtn.classList.contains("off")) {
      this.elements.createContainers.audio.volume = 0;
    } else {
      this.elements.createContainers.audio.volume = 1;
    }
  };
}
