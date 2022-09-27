
//Calculadora Secuencial

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

        //Reservas en un Hotel



        
        
    