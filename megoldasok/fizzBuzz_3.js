function fizzBuzz(sorSzam) {
  if (oszthato3mal(sorSzam) && oszthato5tel(sorSzam)) {
    c.fillStyle = 'orange';
  } else if (oszthato3mal(sorSzam)) {
    c.fillStyle = 'red';
  } else if (oszthato5tel(sorSzam)) {
    c.fillStyle = 'yellow';
  } else {
    c.fillStyle = 'black';
  }

  c.fillRect((sorSzam - 1) * 10, 0, 10, 10);
}

for (var i = 0; i < 40; i++) {
  fizzBuzz(i + 1);
}

function oszthatoMaradekNelkul(osztando, oszto) {
  return osztando % oszto === 0;
}

function oszthato3mal(osztando) {
  return oszthatoMaradekNelkul(osztando, 3);
}

function oszthato5tel(osztando) {
  return oszthatoMaradekNelkul(osztando, 5);
}
/*

A fizzBuzz függvényt a for ciklus 40-szer fogja meghívni. Paraméterben átadja neki a ciklusváltozót, amit a függvény sorSzam néven ér el.

Rajzolj ki a képernyőre 40 fekete négyzetet. A négyzetek legyenek egy sorban.
Ha a négyzet sorszáma oszható 3-mal, akkor legyen piros
Ha a négyzet sorszáma oszható 5-tel, akkor legyen sárga
Ha a négyzet sorszáma oszható 3-mal és 5-tel is, akkor legyen narancssárga


Tipp: használd a maradék operátort: %

*/
