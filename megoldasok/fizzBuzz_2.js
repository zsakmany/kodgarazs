function fizzBuzz(sorSzam) {
  if (sorSzam % 3 === 2 && sorSzam % 5 === 4) {
    c.fillStyle = 'orange';
  } else if (sorSzam % 3 === 2) {
    c.fillStyle = 'red';
  } else if (sorSzam % 5 === 4) {
    c.fillStyle = 'yellow';
  } else {
    c.fillStyle = 'black';
  }

  c.fillRect(sorSzam * 10, 0, 10, 10);
}

for (var i = 0; i < 40; i++) {
  fizzBuzz(i);
}
/*

A fizzBuzz függvényt a for ciklus 40-szer fogja meghívni. Paraméterben átadja neki a ciklusváltozót, amit a függvény sorSzam néven ér el.

Rajzolj ki a képernyőre 40 fekete négyzetet. A négyzetek legyenek egy sorban.
Ha a négyzet sorszáma oszható 3-mal, akkor legyen piros
Ha a négyzet sorszáma oszható 5-tel, akkor legyen sárga
Ha a négyzet sorszáma oszható 3-mal és 5-tel is, akkor legyen narancssárga


Tipp: használd a maradék operátort: %

*/
