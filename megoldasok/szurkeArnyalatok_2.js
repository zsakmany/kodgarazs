for (var i = 0; i < 400; i++) {
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  c.fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  c.fillRect(0, i, 400, 1);
}

/*

Próbáljátok megoldani a következő feladatokat:
 - A szürke átmenet legyen felülről lefele, ne balról jobbra
 - Ha elértük a fehér színt, ne váltson egyszerre feketére, hanem folyamatosan sötétedjen vissza
 - Legyen az átmenet színes, ne csak fekete-szürke-fehér. Minél színesebb, annál jobb

 */
