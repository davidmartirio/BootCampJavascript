var hoteles = {

    Aledo: {
        name: "Aledo",
        location: "Sierra Espuña",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/317218671.jpg?k=face269ad915e1700545d3fdb78ee8d666ed4a33096a8cc5a1bc5b701b1855d1&o=&hp=1"
    },
    
    Archena: {
        name: "Archena",
        location: "Murcia",
        img: "https://photos.hotelbeds.com/giata/bigger/07/076242/076242a_hb_a_007.jpg"
    },
    
    Benidorm: {
        name: "Sandos",
        location: "Benidorm",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/93/f7/9d/sandos-benidorm-suites.jpg"
    },

};

var selectedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: Aledo, Archena o Benidorm",);

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var rating = prompt("Puntuacion del 1 al 5");

var stars = {
    1:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;