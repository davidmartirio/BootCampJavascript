
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


var operandoA;
var operandoB;
var operacion;
var res = 0;


document.getElementById("buttonSumar").addEventListener("click", resultadoSuma);
document.getElementById("buttonRestar").addEventListener("click", resultadoResta);
document.getElementById("buttonMultiplicar").addEventListener("click", resultadoMultiplicacion);
document.getElementById("buttonDividir").addEventListener("click", resultadoDivision);
document.getElementById("buttonIgual").addEventListener("click", resultadoIgual);


//Eventos

        function resultadoSuma(){
            operandoA = document.getElementById("resultado").value;
            operacion = "+";
            limpiar();
        }
        function resultadoResta(){
            operandoA = document.getElementById("resultado").value;
            operacion = "-";
            limpiar();
        }
        function resultadoMultiplicacion(){
            operandoA = document.getElementById("resultado").value;
            operacion = "x";
            limpiar();
        }
        function resultadoDivision(){
            operandoA = document.getElementById("resultado").value;
            operacion = "/";
            limpiar();
        }
        function resultadoIgual(){
            operandoB = document.getElementById("resultado").value;
            resolver();
        }
        function limpiar(){
            document.getElementById("resultado").value = "";          
        }

        function resolver(){
            switch(operacion){
                case "+":
                res = parseFloat(operandoA) + parseFloat(operandoB);
                break; 

                case "-":
                res = parseFloat(operandoA) - parseFloat(operandoB);
                break; 

                case "x":
                res = parseFloat(operandoA) * parseFloat(operandoB);
                break; 

                case "/":
                res = parseFloat(operandoA) / parseFloat(operandoB);
                break; 
            }

            limpiar();
            ejecutar(); 

            function ejecutar(){
                if(operandoB === "" || resultadoIgual == operandoA + operandoB || resultadoIgual == operandoA * operandoB || resultadoIgual == operandoA - operandoB || resultadoIgual == operandoA / operandoB ){
                    document.getElementById("resultado").value = alert("Error, vuelve a intentarlo"); 
                    document.getElementById("resultado").value = "";
                } else {
                    document.getElementById("resultado").value = res; 
                }
            }
            
        }
