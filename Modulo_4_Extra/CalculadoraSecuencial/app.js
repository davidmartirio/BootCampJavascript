
// Calculadora Secuencial
// Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:

// Solo es necesario un único campo numérico.
// Mantén los 4 botones de las 4 operaciones.
// Añade un botón de igual o resultado ( "=" ).
// Una calculadora secuencial funciona del siguiente modo:

// El usuario introduce un primer número.
// Clicka una operación.
// A continuación introduce un segundo número.
// Clicka de nuevo otra operación.
// Y así sucesivamente... hasta que pulsa el botón de resultado.
// Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una operación, deberás:

// Extraer el operando que hay en el input.
// Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado parcial y el nuevo operando.
// Almacenar la operación actual para la siguiente vez.
// NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también.

//Ejercicio

// Obtener referencias a los elementos del DOM
const operando = document.getElementById('operando') 
const botonSuma = document.getElementById('buttonSumar') 
const botonResta = document.getElementById('buttonRestar') 
const botonMultiplicacion = document.getElementById('buttonMultiplicar') 
const botonDivision = document.getElementById('buttonDividir') 
const botonIgual = document.getElementById('buttonIgual') 
const resultado = document.getElementById('resultado') 

// Variables para almacenar el resultado parcial y la operación anterior
let resultadoParcial = 0;
let operacionAnterior = null;

// Funciones para realizar las operaciones
function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

function multiplicacion(a,b) {
    return a * b;
}

function division(a,b) {
    if (b == 0) {
        return "Error: División por cero";
    } else {
        return a / b;
    }
}

// Función para actualizar el resultado parcial
function actualizarResultadoParcial() {
    const nuevoOperando = Number(operando.value);
    if (operacionAnterior) {
        resultadoParcial = operacionAnterior(resultadoParcial, nuevoOperando);
    } else {
        resultadoParcial = nuevoOperando;
    }
}

// Añadir event listeners a los botones
botonSuma.addEventListener('click', () => {
    actualizarResultadoParcial();
    operacionAnterior = suma;
    operando.value = '';
    operando.focus();
});

botonResta.addEventListener('click', () => {
    actualizarResultadoParcial();
    operacionAnterior = resta;
    operando.value = '';
    operando.focus();
});

botonMultiplicacion.addEventListener('click', () => {
    actualizarResultadoParcial();
    operacionAnterior = multiplicacion;
    operando.value = '';
    operando.focus();
});

botonDivision.addEventListener('click', () => {
    actualizarResultadoParcial();
    operacionAnterior = division;
    operando.value = '';
    operando.focus();
});

botonIgual.addEventListener('click', () => {
    actualizarResultadoParcial();
    resultado.textContent = ('El Resultado de la Operacion es: ' ) + resultadoParcial.toString();
    resultadoParcial = 0;
    operacionAnterior = null;
    document.getElementById('operando').value = '';
    operando.focus()
    
});

operando.addEventListener('input', () => {
    resultado.textContent = '';
});

// Añadir event listener para el evento keydown
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '+':
            event.preventDefault();
            actualizarResultadoParcial();
            operacionAnterior = suma;
            operando.value = '';
            break;
        case '-':
            event.preventDefault();
            actualizarResultadoParcial();
            operacionAnterior = resta;
            operando.value = '';
            break;
        case '*':
            event.preventDefault();
            actualizarResultadoParcial();
            operacionAnterior = multiplicacion;
            operando.value = '';
            break;
        case '/':
            event.preventDefault();
            actualizarResultadoParcial();
            operacionAnterior = division;
            operando.value = '';
            break;
        case 'Enter':
            actualizarResultadoParcial();
            resultado.textContent = ('El Resultado de la Operacion es: ' ) + resultadoParcial.toString();
            resultadoParcial = 0;
            operacionAnterior = null;
            document.getElementById('operando').value = '';
            break;
    }
});