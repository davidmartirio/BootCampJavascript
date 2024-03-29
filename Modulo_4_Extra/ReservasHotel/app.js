
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

//Ejercicio

function CalcularPrecio() {
    // Obtener valores del formulario
    const tipoHabitación = document.getElementById('habitación').value;
    const eligeSpa = document.getElementById('spa').checked;
    const tipoCategoria = document.getElementById('categoria').value;
    let numeroNoches = document.getElementById('noche').value;
    const numeroParkingNoches = document.getElementById('nochesParking').value;
  
    // Calcular tarifa por noche en función del tipo de habitación y uso del SPA
    function calcularTarifaNoche(tipoHabitacion) {
      let tarifaNoche;
      switch (tipoHabitacion) {
        case 'standard':
          tarifaNoche = 100;
          break;
        case 'juniorSuite':
          tarifaNoche = 120;
          break;
        case 'suite':
          tarifaNoche = 150;
          break;
      }
      return tarifaNoche;
    }
  
    function calcularTarifaSpa(eligeSpa, tarifaNoche) {
      if (eligeSpa) {
        tarifaNoche = tarifaNoche + 20;
      }
      return tarifaNoche;
    }

     function aplicarOcupacion(tipoCategoria, tarifaNoche) {
      switch (tipoCategoria) {
        case 'individual':
          tarifaNoche = tarifaNoche * 0.75;
          break;
        case 'triple':
          tarifaNoche = tarifaNoche * 1.25;
          break;
      }
      return tarifaNoche;
    }
  
    // Calcular coste total
    let tarifaNoche = calcularTarifaNoche(tipoHabitación);
    tarifaNoche = calcularTarifaSpa(eligeSpa, tarifaNoche);
    tarifaNoche = aplicarOcupacion(tipoCategoria, tarifaNoche);
    
    
    const total = (tarifaNoche * numeroNoches) + (numeroParkingNoches * 10);
  
    // Mostrar coste total
    document.getElementById('Total').textContent = total + '€';
  }

// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería:
// (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.

