for (var i = 0; i < 400; i++) {
  c.fillStyle = 'rgb(' + veletlenSzam() + ', ' + veletlenSzam() + ', ' + veletlenSzam() + ')';
  c.fillRect(0, i, 400, 1);
}

function veletlenSzam() {
  return Math.random() * 255;
}
/*

Próbáljátok megoldani a következő feladatokat:
 - A szürke átmenet legyen felülről lefele, ne balról jobbra
 - Ha elértük a fehér színt, ne váltson egyszerre feketére, hanem folyamatosan sötétedjen vissza
 - Legyen az átmenet színes, ne csak fekete-szürke-fehér. Minél színesebb, annál jobb

 */
