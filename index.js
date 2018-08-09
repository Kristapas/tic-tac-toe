(function IIFE() {

  const gameData = [...Array(3)].map(item => [...Array(3)]);

  //sukuriu array 3dydzio ir dar jame tris arrays rezultate vienas array kuriu viduje yra 3array 
  //kitais zodziais sukuriu tik tac toe lentele beveik
  const app = document.querySelector('#app');

  const cross = '😈';
  const circle = '😇';

  const create = ({
    tag,
    classList,
    textContent,
    events = {}
  }) => {
    const element = document.createElement(tag);
    element.classList = classList;
    element.textContent = textContent;
    Object.entries(events).forEach(([key, value]) => element.addEventListener(key, value));

    return element;
  }
  const addGameData = (row, box) => {
    gameData[row][box] = cross;
    render();
  };

  const clearApp = () => {
    const children = [...app.children];
    children.forEach(child => app.removeChild(child));
  }


  const render = () => {
    clearApp();
    const appContent = app.children;
    // console.log('I will render your tic tac toe');
    gameData.forEach((rowData, rowIndex) => {
      const row = create({
        tag: 'div',
        classList: 'row'

      });
      // const row = document.createElement('div');
      // row.classList.add('row');
      rowData.forEach((boxData, boxIndex) => {
        const box = create({
          tag: 'div',
          classList: 'box',
          textContent: boxData,
          events: {
            click: () => addGameData(rowIndex, boxIndex)
          },

        });
        // const box = document.createElement('div');
        // box.classList.add('box');
        // box.textContent = boxData;
        row.appendChild(box);

      });

      app.appendChild(row);

    });
  };
  // jei norim uzvardinti kitaip o ne target tiesiog const start = ({target: element }) ir kitur jau 
  // keiciam visur kur reikia target i element
  const start = ({
    target
  }) => {
    // alert('Lests Start');
    // console.log('event', target);
    clearApp();
    render();
  };

  const initApp = () => {
    const startButton = create({
      tag: 'button',
      classList: 'primary-button',
      textContent: 'Start',
      events: {
        click: start,
      }
    });
    // const startButton = document.createElement('button');
    // startButton.textContent = 'Start';
    // startButton.classList.add('primary-button');
    // startButton.addEventListener('click', start);
    app.appendChild(startButton);
    // console.log('Init My App');
  };

  document.addEventListener('DOMContentLoaded', initApp);

})();

//DOM= document object model