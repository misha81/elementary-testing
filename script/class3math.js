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
        alert('Введіть кількість запитань!');
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

            let newMark = 0;
            let newQuestionNumber = 0;

            generateButton.addEventListener('click', generateMathProblem);
            submitButton.addEventListener('click', checkAnswer);

     
            function generateMathProblem() {
                generateButton.remove();
                let num1, num2, num3, operator1, operator2;
            
                do {
                    num1 = randomInteger(1, 500);
                    num2 = randomInteger(1, 500);
                    num3 = randomInteger(1, 500);
            
                    // Вибір оператора
                    if ((num1 < 10 && num2 < 10 && num3 < 70) || (num1 < 15 && num2 < 5 && num3 < 5) || (num1 < 5 && num2 < 15 && num3 < 5) || (num1 < 5 && num2 < 5 && num3 < 15)) {
                        operator1 = '*'; // Перемноження для чисел менше 7
                    } else {
                        operator1 = ['+', '-'][Math.floor(Math.random() * 2)];
                        operator2 = ['+', '-'][Math.floor(Math.random() * 2)];
                    }
                } while (

                    (operator1 !== '*' && (num1 % num3 !== 0)) || // Перевірка для додавання або віднімання
                    (operator1 === '-' && num1 < num2 + num3) || // Перевірка для віднімання
                    num1 === num3||
                    (operator2 !== '*' && (num1 % num3 !== 0)) || // Перевірка для додавання або віднімання
                    (operator2 === '-' && num1 < num2 + num3)
                );
            
                const result = (operator1 === '*' && operator2 === '*') ? num1 * num2 * num3 : eval(`${num1} ${operator1} ${num2} ${operator2} ${num3}`);
                const mathProblem = (operator1 === '*' || operator2 === '*') ? `${num1} ${operator1} ${num2} ${operator2} ${num3}` : `${num1} ${operator1} ${num2} ${operator2} ${num3}`;
                document.querySelector('#math-problem').textContent = `Математичний приклад: ${mathProblem}`;
            
                answer.value = '';
            }
            function checkAnswer() {
                
                const mathProblemText = document.querySelector('#math-problem').textContent;
                const match = mathProblemText.match(/(\d+ [\+\-\*\/] \d+ ([\+\-\*\/] \d+)*)/);

                if (match) {
                    const expression = match[0];
                    const result = eval(expression);

                    const userAnswer = parseFloat(answer.value);

                    if (userAnswer === result && result > 0) {
                        newMark++;
                    }

                    newQuestionNumber++;

                    if (newQuestionNumber === amount) {
                        giveAnswers();
                        // document.location.reload();
                    }

                    generateMathProblem();
                }
            }

            function giveAnswers() {
                leftArrow.remove();

                generateButton.remove();
                answer.remove();
                mathProblemText.remove();
                submitButton.remove();

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
                    window.location.href = './index3class.html';
                }
                // alert(`Результат: ${newMark} / ${newQuestionNumber}, тобто ${((newMark / newQuestionNumber) * 100).toFixed(2)}%`);
                // window.location.href = './index1class.html';
            }

            function randomInteger(min, max) {
                return Math.floor(min + Math.random() * (max - min + 1));
            }
        }
    }
}
