import tasks from './additional4class.js';

const taskPairs = tasks.map(task => ({ task: task.task, answer: task.answer }));

const yourTaskSet = Math.floor(Math.random() * taskPairs.length);
const yourTask = taskPairs[yourTaskSet];

const leftArrow = document.querySelector('.left-arrow-btn');




const dano = document.querySelector('#task');
const createDano = document.querySelector('#create');
const EnterAnswer = document.querySelector('#answer');
const checkAnswer = document.querySelector('#check');

createDano.addEventListener('click', setNumberOfTasks);

function setNumberOfTasks() {

          createDano.remove();
          const emptyOne = document.querySelector('.emptyH');
          dano.textContent = yourTask.task;
          checkAnswer.addEventListener("click", function () {

            dano.remove()
            // createDano.remove();
            EnterAnswer.remove();
            checkAnswer.remove();

            if (EnterAnswer.value === yourTask.answer) {
              leftArrow.remove();
              const resultTxt = document.createElement('p');
              resultTxt.textContent = 'Правильна відповідь!';
              resultTxt.setAttribute('id', 'result-ans-correct');
              emptyOne.after(resultTxt);
              const backButton = document.createElement('button');
              backButton.textContent = 'Повернутися назад';
              backButton.setAttribute('id', 'result-btn');
              resultTxt.after(backButton);
              backButton.addEventListener('click', function () {
                window.location.href = './index4class.html'
              });
            } else {
              leftArrow.remove();
              const resultTxt = document.createElement('p');
              resultTxt.textContent = `Неправильна відповідь! Правильно: ${yourTask.answer}`;
              resultTxt.setAttribute('id', 'result-ans-wrong');
              emptyOne.after(resultTxt);
              const backButton = document.createElement('button');
              backButton.textContent = 'Повернутися назад';
              backButton.setAttribute('id', 'result-btn');
              resultTxt.after(backButton);
              backButton.addEventListener('click', function () {
                window.location.href = './index4class.html'
              });
            }
          });
          
      }


