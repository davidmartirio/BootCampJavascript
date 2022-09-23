//Valores del input

var num1 = () => Number(document.getElementById("PrimerNumero").value)
var num2 = () => Number(document.getElementById("SegundoNumero").value)

//Operaciones

var suma = () => num1() + num2();
var resta = () => num1() - num2();
var multiplicacion = () => num1() * num2();
var division = () => num1() / num2();

// Obtener el Resultado

function resultadoSuma(){
    if(condicion()){
        document.getElementById("Resultado").value = "Debes introducir dos numeros y rellenar los dos campos"

    }else{
        document.getElementById("Resultado").value = suma();       
    } 
}  
function resultadoResta(){
    if(condicion()){
        document.getElementById("Resultado").value = "Debes introducir dos numeros y rellenar los dos campos"

    }else{
        document.getElementById("Resultado").value = resta();       
    } 
}
function resultadoMultiplicacion(){
    if(condicion()){
        document.getElementById("Resultado").value = "Debes introducir dos numeros y rellenar los dos campos"

    }else{
        document.getElementById("Resultado").value = multiplicacion();       
    } 
}  
function resultadoDivision(){
    if(condicion()){
        document.getElementById("Resultado").value = "Debes introducir dos numeros y rellenar los dos campos"

    }else{
        document.getElementById("Resultado").value = division();       
    } 
}  


//Eventos

document.getElementById("buttonSumar").addEventListener("click", resultadoSuma);
document.getElementById("buttonRestar").addEventListener("click", resultadoResta);
document.getElementById("buttonMultiplicar").addEventListener("click", resultadoMultiplicacion);
document.getElementById("buttonDividir").addEventListener("click", resultadoDivision);

//Condicional

function condicion(){
    
    return (isNaN (num1()) || isNaN (num2()) || num1() == "" || num2() == "" ) 
    
}


// function calcularPesoIdeal(sexo, altura) {
//   var factor = sexo == "hombre" ? 0.75 : 0.6;
//   return (altura * 100 - 150) * factor + 50;
// }

// function calcularExcesoDePeso(pesoActual, pesoIdeal) {
//   return pesoActual - pesoIdeal;
// }

// function notificaPesoIdeal(pesoIdeal) {
//   return "Tu peso ideal corresponde a " + pesoIdeal + "kilos";
// }

// function notificaEstadoSobrepeso(excesoPeso) {
//   if (excesoPeso >= 1) {
//     return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + "kilos";
//   } else if (excesoPeso <= -1) {
//     return "Come un poco mas! Debes recuperar " + (excesoPeso * -1) + "kilos";
//   } else {
//     return "Estas en tu peso ideal";
//   }
// }

// function informePesoIdeal(altura, pesoActual, sexo) {
//   var pesoIdeal = calcularPesoIdeal(sexo, altura);
//   var excesoPeso = calcularExcesoDePeso(pesoActual, pesoIdeal);
//   console.log(notificaPesoIdeal(pesoIdeal));
//   console.log(notificaEstadoSobrepeso(excesoPeso));
// }

// informePesoIdeal(1.85, 70, "hombre");
