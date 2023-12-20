const pamount = document.querySelector('.enterTasksText');
const numberOfTasks = document.querySelector('#amountOfTasks');
const startTestButton = document.querySelector('#startTest');
const emptyOne = document.querySelector('.emptyH');

const leftArrow = document.querySelector('.left-arrow-btn');

startTestButton.addEventListener('click', setNumberOfTasks);


function setNumberOfTasks() {
    const amount = parseInt(numberOfTasks.value); 
    const emptyOne = document.querySelector('.emptyH');

    if (isNaN(amount)) {
        alert('Введіть кількість запиатнь!');
    } else {
        if (emptyOne) {
            pamount.remove();
            numberOfTasks.remove();
            startTestButton.remove();
    
    
            const mathProblemText = document.createElement('p');
            mathProblemText.textContent = 'Математичний приклад:';
            mathProblemText.setAttribute('id', 'math-problem');
            emptyOne.after(mathProblemText);
    
            const generateButton = document.createElement('button');
            generateButton.textContent = 'Генерувати';
            generateButton.setAttribute('id', 'generate');
            mathProblemText.after(generateButton);
    
            const answer = document.createElement('input');
            answer.setAttribute('type', 'number');
            answer.setAttribute('id', 'typeAnswer');
            generateButton.after(answer);
    
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Надіслати';
            submitButton.setAttribute('id', 'submit');
            answer.after(submitButton);
    
            // const giveUpButton = document.createElement('button');
            // giveUpButton.textContent = 'Здати тест';
            // giveUpButton.setAttribute('id', 'giveUp');
            // submitButton.after(giveUpButton);
    
            let newMark = 0;
            let newQuestionNumber = 0;
    
            generateButton.addEventListener('click', generateMathProblem);
            submitButton.addEventListener('click', checkAnswer);
            // giveUpButton.addEventListener('click', giveAnswers);
    
            function generateMathProblem() {
    
                generateButton.remove();


                let num1, num2;
    
                do {
                    num1 = randomInteger(1, 25);
                    num2 = randomInteger(1, 25);
                } while (num1 < num2);
    
                const operators = ['+', '-'];
                const operator = operators[Math.floor(Math.random() * operators.length)];
    
                const mathProblem = `${num1} ${operator} ${num2}`;
                mathProblemText.textContent = `Математичний приклад: ${mathProblem}`;
    
                let result;
                if (operator === '+') {
                    result = num1 + num2;
                } else {
                    result = num1 - num2;
                }
    
                answer.value = '';
            }
    
            function checkAnswer() {
                const mathProblemTextContent = mathProblemText.textContent;
                const match = mathProblemTextContent.match(/(\d+) (\+|-) (\d+)/);
    
                if (match) {
                    const num1 = parseInt(match[1]);
                    const operator = match[2];
                    const num2 = parseInt(match[3]);
    
                    let result;
                    if (operator === '+') {
                        result = num1 + num2;
                    } else {
                        result = num1 - num2;
                    }
    
                    if (Number(answer.value) === result) {
                        newMark++;
                        newQuestionNumber++;
                    } else {
                        newQuestionNumber++;
                    }
    
                    if (newQuestionNumber === amount) {
                        giveAnswers();
                    }
    
                    generateMathProblem();
                }
            }
    
            function giveAnswers() {
                generateButton.remove();
                answer.remove();
                mathProblemText.remove();
                submitButton.remove();
                leftArrow.remove();

                const resultText = document.createElement('p');
                resultText.textContent = `Результат: ${newMark} / ${newQuestionNumber}, тобто ${((newMark / newQuestionNumber) * 100).toFixed(2)}% або ${((newMark / newQuestionNumber) * 12).toFixed(0)} балів`;
                resultText.setAttribute('id', 'resText');
                emptyOne.after(resultText);

                const resultButton = document.createElement('button');
                resultButton.textContent = 'Повернутися назад';
                resultButton.setAttribute('id', 'resButton');
                resultText.after(resultButton);

                resultButton.addEventListener('click', getBack);
                function getBack() {
                    window.location.href = './index1class.html';
                }

            }
    
            function randomInteger(min, max) {
                return Math.floor(min + Math.random() * (max - min + 1));
            }
        }
    }
    }

    


