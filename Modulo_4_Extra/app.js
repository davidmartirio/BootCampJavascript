
//Calculadora Secuencial

var operandoA;
var operandoB;
var operacion;
var res = 0;


document.getElementById("buttonSumar").addEventListener("click", resultadoSuma);
document.getElementById("buttonRestar").addEventListener("click", resultadoResta);
document.getElementById("buttonMultiplicar").addEventListener("click", resultadoMultiplicacion);
document.getElementById("buttonDividir").addEventListener("click", resultadoDivision);
document.getElementById("buttonCalcular").addEventListener("click", resultadoIgual);


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

// Reservas en un Hotel
// Vamos a simular un formulario de reserva de un hotel. Para ello añade los siguientes inputs a tu HTML:

// Selector de tipo de habitación, a elegir entre Standard, Junior Suite y Suite (< select >)
// Checkbox para hacer uso del SPA o no (< input > tipo checkbox)
// Selector para indicar la ocupación de la habitación, a elegir entre Individual, Doble o Triple (< select >)
// Número de noches (< input > tipo número)
// Cuantas noches de parking se desea (< input > tipo número)
// Finalmente un botón de 'Calcular' para mostrar por pantalla el coste total de la estancia.
// Para calcular el coste de la estancia ten en cuenta lo siguiente:

// La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
// El uso del SPA incrementa la tarifa anterior en 20€.
// Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor 
// de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche,
// mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
// Cada noche de parking suma 10€.
// Un ejemplo de estancia sería:

// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería:
// (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.

// OPCIONAL

// Prescinde del botón calcular y muestra el resultado total a medida que el usuario va haciendo cambios en el formulario.


//variables
    var habitaciones = {
        habitaciónStandart : 100,
        habitaciónJuniorSuite : 120,
        habitaciónSuite : 150
    };
    var spa = 20;
    var precioNocheParking = 10;
    var ocupaciónIndividual = (habitacion * (0,75));
    var ocupaciónDoble = habitacion;
    var ocupaciónTriple = (habitacion * 1,25);
    var numeroNoches = document.getElementById('noches').value
    var numeroNochesParking = document.getElementById('nochesParking').value
    var calcular;
    var habitacion;
    var ocupacion;
    var resultado;
    

    function habitacionElegida(){
        var selectHabitacion = document.getElementById('selectHabitacion')
        habitacion = selectHabitacion.value;
    }

    function ocupacionElegida(){
        var selectOcupacion = document.getElementById('selectOcupacion')
        ocupacion = selectOcupacion.value;
    }
    function spaElegido(){
        if(document.getElementById('spaElegido').checked){
            habitacion = habitacion + 20;
        }else{
            habitacion = habitacion;
        }
    }
        
    function resultado(){
        resultado = (ocupaciónIndividual * numeroNoches) + (10 * numeroNochesParking);
        document.getElementById('resultado').value = resultado;
    }

    document.getElementById("Calcular").addEventListener("click", resultado);
    
// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería:
// (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.



    





        
        
    