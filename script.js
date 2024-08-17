let resultElement = document.getElementById('result');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    resultElement.textContent = expression;
}

function clearDisplay() {
    expression = '';
    resultElement.textContent = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    resultElement.textContent = expression || '0';
}

function calculate() {
    try {
        expression = eval(expression).toString();
        resultElement.textContent = expression;
    } catch (error) {
        resultElement.textContent = 'Erro';
    }
}
