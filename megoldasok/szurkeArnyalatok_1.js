var color = 0;

for (var i = 0; i < 400; i++) {
  c.fillStyle = 'rgb(' + color + ', ' + color + ', ' + color + ')';
  c.fillRect(0, i, 400, 1);

  if (i < 255) {
    color++;
  } else {
    color--;
  }
}

/*

Próbáljátok megoldani a következő feladatokat:
 - A szürke átmenet legyen felülről lefele, ne balról jobbra
 - Ha elértük a fehér színt, ne váltson egyszerre feketére, hanem folyamatosan sötétedjen vissza
 - Legyen az átmenet színes, ne csak fekete-szürke-fehér. Minél színesebb, annál jobb

 */
