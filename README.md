# Vezbe u pseudo-kodu

Dat je niz objekata sa sledecim svojstvima:
- ime
- pol
- godiste
- drzava

1. Pronaci broj zenskih i broj muskih osoba
2. Pronaci iz kojih su drzava nasi korisnici
3. Pronaci muskarce iz Srbije starije od 30 godina (ukljucno)
4. Izvuci sva imena, sortirana abacedno
5. Saznati koliko ima korisnika iz koje drzave (bonus)

## RESENJA:

### 1.

postaviti brojac m i brojac z na 0
iterirati niz
  ako je pol objekata musko
    povecati m brojac
  inace
    povecati z brojac

ALTERNATIVNO:

postaviti brojac m
iterirati niz
  ako je pol objekata musko
    povecati m brojac
izracunati broj zena = duzina niza minus broj muskih

### 2.

proglasiti novi niz za drzave
iterirati postojeci niz
  ako se drzava trenutnog objekta ne nalazi u novom nizu
    dodati je u novi niz

ALTERNATIVNO:

proglasiti novi skup (Set)
iterirati postojeci niz
  dodavati svaku drzavu u skup

### 3.

napraviti novi niz za rezultate
iterirati postojeci niz
  izracunati godine = trenutna godina - godiste
  ako je korisnik muskarac i ako je iz Srbije i ako ima >= 30 godina
    dodati ga u novi niz

### 4.

napraviti novi niz za imena
iterirati postojeci niz
  dodati ime objekta u novi niz
sortirati novi niz abecedno

### 5.

proglasiti prazan recnik (objekat)
iterirati niz
  ako drzava trenutnog korisnika ne postoji u recniku
    dodajemo je u recnik sa vrednoscu 1
  inace
    povecavamo njenu vrednost za jedan

ALTERNATIVNO:

koristimo postojeci niz drzava
pravimo novi niz brojaca, iste duzine kao niz drzava
postavljamo sve vrednosti niza brojaca na 0
iteriramo niz korisnika
  trazimo index trenutne drzave u nizu drzava
  povecavamo niz brojaca pod tim indexom za 1

ALTERNATIVNO (lose, zbog petlje u petlji):

pravimo prazan niz za brojace
iteriramo postojeci niz drzava
  za svaku drzavu, iteriramo niz korisnika
    brojimo sve korisnike iz te drzave
    dodajemo broj u niz brojaca
