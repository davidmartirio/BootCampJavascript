
//Ejercicio 1 - Calculo IVA
console.log("//Ejercicio 1 - Calculo IVA");


const product = { count: 3, price: 12.55, type: "ropa" };
let total = product.count * product.price;
let tipo = product.type;

product.count <= 0 ? (total = 0) : (total = product.count * product.price);

switch (tipo) {
  case "ropa":
    console.log("El precio total con iva de la ropa es de:", total * 0.21, "euros");
    break;
  case "alimentacion":
    console.log("El precio total con iva de alimentacion es de:", total * 0.1, "euros");
    break;
  case "libro":
    console.log("El precio total con iva del libro es de:", total * 0.04, "euros");
    break;
}

//Calcular sueldo neto en nómina
console.log("")
console.log("//Calcular sueldo neto en nómina")

const empleado = {
  bruto: 35000,
  hijos: 2,
  pagas: 14,
};

// Sacar Neto Anual y Mensual


if (empleado.bruto < 12000) {
  console.log("El saldo neto anual es de:", empleado.bruto, "euros");
  console.log("El saldo neto mensual a 14 pagas es de:", empleado.bruto / 14, "euros");
  console.log("El saldo neto mensual a 12 pagas es de:", empleado.bruto / 12, "euros");
} else if (empleado.bruto > 12000 && empleado.bruto < 24000) {
    if (empleado.hijos > 0) {
    console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.06, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.06)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.06)) / 12, "euros");
    } else {
    console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.08, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.08)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.08)) / 12, "euros");
    }
} else if (empleado.bruto > 24000 && empleado.bruto < 34000) {
  if (empleado.hijos > 0) 
    {console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.14, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.14)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.14)) / 12, "euros");
    } else {
    console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.16, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.16)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.16)) / 12, "euros");
    }
} else if (empleado.bruto > 34000) {
  if (empleado.hijos > 0) {
    console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.28, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.28)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.28)) / 12, "euros");
    } else {
    console.log("El saldo neto anual es de:",empleado.bruto - empleado.bruto * 0.3, "euros");
    console.log("El saldo neto mensual a 14 pagas es de:",(empleado.bruto - (empleado.bruto * 0.03)) / 14, "euros");
    console.log("El saldo neto mensual a 12 pagas es de:",(empleado.bruto - (empleado.bruto * 0.03)) / 12, "euros");
    }
}


/* Practica: A partir de una reserva de habitacion con el numero de noches y precio por noche, 
calcular el precio total y aplicar un 20% de descuento si este supero los 500 euros
Trabajar con esta estructura: const booking = {count: 5, price: 127.95}*/

console.log("")
console.log("//Calcular numero de noches y precio por noche")

const booking = { count: 6, price: 127.95 };

let totalBooking = booking.count * booking.price;

let descuento = totalBooking * 0.2;

if (totalBooking < 500) {
  console.log("El totalBooking de la reserva sin descuento es de:", totalBooking, "euros");
} else {
  console.log("El descuento es de:", descuento, "euros");
  console.log("El totalBooking de la reserva con descuento es de:", totalBooking - descuento, "euros");
}

const booking1 = {count: 3, price: 100};
const booking2 = {count: 5, price: 100};

const mayorNumeroNoches = booking1.count > booking2.count ? booking1.count : booking2.count;

booking1.count > booking2.count ? console.log("booking1 tiene mas numero de noches") :
                                  console.log("booking2 tiene mas numero de noches");

/*Ejercicios Extra
1º Dado el siguiente objeto. Escribir en una variable un día de la semana y
decir cual asignatura toca ese día.
*/
console.log("")
console.log("//1º Escribir en una variable un día de la semana y decir la asignatura de ese día. ")
/*const Lunes = {day:"Lunes", asignatura:"Matematicas"};
const Martes = {day:"Martes", asignatura:"Lengua"};
const Miercoles = {day:"Miercoles", asignatura:"Fisica"};
const Jueves = {day:"Jueves", asignatura:"Quimica"};
const Viernes = {day:"Viernes", asignatura:"Gimnasia"};*/

let diaDeLaSemana = "martes";

switch(diaDeLaSemana){
  case "lunes":{
  console.log("El Lunes toca Matematicas ")
  break;
  }
  case "martes":{
    console.log("El martes toca Lengua ")
    break;
  }
  case "miercoles":{
    console.log("El miercoles toca Fisica ")
    break;
  }
  case "jueves":{
    console.log("El jueves toca Quimica ")
    break;
  }
  case "viernes":{
    console.log("El viernes toca Gimnasia ")
    break;
  }

}

console.log("")
console.log("//2º Según una variable llamada hora, mostrar un buenos días, buenas tardes o buenas noches según la hora");

let hora = 1;

if( hora > 6 && hora < 12){
  console.log("Buenos dias¡")
}else if(hora > 13 && hora < 20){
  console.log("Buenas tardes¡")
}else if(hora > 21 || hora < 5){
  console.log("Buenas noches¡")

}

/*Ejercicio 2-2 Avanzado, de momento no lo he visto

function getTotalVat(product) {
  return product.count > 0 ? product.count \* getVat(product) : 0;
}

function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}*/
