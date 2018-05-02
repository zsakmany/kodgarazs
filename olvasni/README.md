## Feltételes utasítás:

```
if (feltétel) {
  //utasítások
}
```

Ha a feltétel igaz, az utasítások lefutnak. Tovább lehet fűzni else if (különben, ha) és a végén egy darab else (különben)ággal is.  
A feltétel igazra, vagy hamisra értékelődik ki. Össze lehet hasonlítani két értéket a <, >, <=, >=, ===, !== műveletekkel. Mindig három egyenlőségjelet használjatok összehasonlításnál, nem kettőt!
Logikai kifjezések a &&, ||. (AltGr+C és AltGr+W)

## Ciklus:

```
for(értékmegadás; feltétel; érték növelés) {
  //utasítások
}
```

Ameddig a feltétel igaz, a ciklus újra és újra lefuttatja az utasításokat. Végtelen ciklusnál ez a folyamat sosem áll le, és a program általában lefagy. A for ciklus mind a 3 része opcionális, és kihagyható. Például ez egy teljesen érvényes, végtelen for ciklus:

```
for(;;){
  //utasítások
}
```

## Változók:

Mindig beszédes változó neveket használjatok. A JS-ben mindne kis-nagybetű érzékeny, tehát az alma és az Alma változó nem ugyanaz. Olyan neveket nem használhattok amiket a program már lefoglalt, itt egy link róluk: http://mdn.beonex.com/en/JavaScript/Reference/Reserved_Words.html

## Ciklusok

Az előző alkalommal feladott házi feladatnál az elől és hátul tesztelős ciklusok voltak a megfejtés.
Elől tesztelős ciklus

```
while ( feltétel ) {
  //ciklusmag
}
```

Hasonló az if (ha) feltételhez, de itt a ciklusmag nem egyszer fut le, hanem addig amíg a feltétel igaz. Ez azt jelenti, hogy ha olyan feltétel adunk meg, ami sosem lesz hamis, a ciklus végtelen ideig fog futni, és ez a program lefagyásához vezet.
Nagyon egyszerű végtelen ciklus:

```
while ( true ) {
  //ciklusmag
}
```

A for ciklussal ellentétben, itt nincs beépített ciklus változó, nekünk kell gondoskodni arról, hogy a feltételbe olyan vizsgálatot adjunk meg ami a kellő állapotban hamis lesz.
Hátul tesztelős ciklus

```
do {
  //ciklusmag
} while ( feltétel )
```

Ugyanaz, mint az előző példa, de itt a feltételt a ciklusmag elvégzése után ellenőrizzük, vagyis akkor is lefut legalább egyszer, ha a feltétel eleve hamis

```
do {
  //ciklusmag
} while ( false )
```

## Függvények

Ha a változók, olyanok mint a bögrék, akkor a függvények dobozok. Több utasítást lehet beléjük pakolni, és amikor szükség van rájuk akkor meghívni. Eddig is használtunk már függvényeket, ilyen a fillRect() vagy a stroke().
Saját függvényt létrehozni nem nehéz:

```
function ezAFuggvenyNemCsinalSemmit() {}
```

Itt is törekedni kell a beszédes elnevezésre. A zárójelben megadhatunk egy vesszővel elválasztott listát, ezek a parameterek. Amikor meghívjuk a dobozt, ezeknek a paramétereknek értékeket tudunk adni. Amikor például a fillRect() függvényt használtuk, 4 paramétert is adtunk neki (x, y, szélesség, magasság). Ezeket az értékeket a függvény belsejében ugyanúgy el tudod érni, mint minden változót, de nem kell külön var kulcsszóval létrehozni őket.

```
function koszonj(nev) {
  console.log(’Szia ’ + nev);
}
koszonj(’Ödönke’);
```

## Milyen függvényeket használunk?

* fillRect - téglalap rajzolása
* beginPath - kezdjünk vonalat rajzolni
* moveTo - mozgasd a cerúzát
* lineTo - rajzolj vonalat
* stroke - rajzold meg a vonalat
