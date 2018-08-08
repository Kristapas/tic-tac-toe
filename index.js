(() => {

  const gameData = [...Array(3)].map(item => [...Array(3)]);

  //sukuriu array 3dydzio ir dar jame tris arrays rezultate vienas array kuriu viduje yra 3array 
  //kitais zodziais sukuriu tik tac toe lentele beveik
  const app = document.querySelector('#app');

  const render = () => {
    // console.log('I will render your tic tac toe');
    gameData.forEach(rowData => {
      const row = document.createElement('div');
      row.classList.add('row');
      rowData.forEach(boxData => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = boxData;
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
    app.removeChild(target);
    render();
  };

  const initApp = () => {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('primary-button');
    startButton.addEventListener('click', start);
    app.appendChild(startButton);
    // console.log('Init My App');
  };

  document.addEventListener('DOMContentLoaded', initApp);

})();

//DOM= document object model