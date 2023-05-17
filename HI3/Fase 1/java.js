    // Obtener referencias a los elementos del DOM
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');
  
    // Agregar un event listener a los botones
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
  
            // Lógica para cada acción
            if (!action) {
                // Si la tecla presionada es un número
                if (displayedNum === '0') {
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + keyContent;
                }
            }
  
            if (action === 'decimal') {
                // Si la tecla presionada es el punto decimal
                if (!displayedNum.includes('.')) {
                    display.textContent = displayedNum + '.';
                }
            }
  
            if (action === 'clear') {
                // Si la tecla presionada es el botón AC (borrar todo)
                display.textContent = '0';
            }
  
            function clearDisplay() {
                display.textContent = '0';
            }
  
  
            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'percentage' || action === 'power') {
                // Si la tecla presionada es un operador
                key.classList.add('is-depressed');
                // Guardar el primer número y la operación seleccionada
                sessionStorage.setItem('firstNumber', displayedNum);
                sessionStorage.setItem('operator', action);
                clearDisplay(); // Llama a la función para borrar el número en el display
            }
  
            if (action === 'sqrt') {
                // Si la tecla presionada es la raíz cuadrada
                const result = Math.sqrt(parseFloat(displayedNum));
                display.textContent = result;
            }
  
            if (action === 'calculate') {
                // Si la tecla presionada es el botón de igual (=)
                const firstNumber = parseFloat(sessionStorage.getItem('firstNumber'));
                const operator = sessionStorage.getItem('operator');
                const secondNumber = parseFloat(displayedNum);
                let result = 0;
  
                if (operator === 'add') {
                    result = firstNumber + secondNumber;
                } else if (operator === 'subtract') {
                    result = firstNumber - secondNumber;
                } else if (operator === 'multiply') {
                    result = firstNumber * secondNumber;
                } else if (operator === 'divide') {
                    result = firstNumber / secondNumber;
                } else if (operator === 'percentage') {
                    result = (firstNumber * secondNumber) / 100;
                } else if (operator === 'power') {
                    result = Math.pow(firstNumber, secondNumber);
                }
                display.textContent = result;
                sessionStorage.removeItem('firstNumber');
                sessionStorage.removeItem('operator');
            }
        }
    });