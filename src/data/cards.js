const cards = [
    {
        "id": 0,
        "name": "Blázen",
        "type": "Velká Arkána",
        "meaning": "Začátky, nevinnost, spontánnost, svobodný duch",
        "meaningInLove": "Začátek nového vztahu, nezávaznost, svoboda, nezávislost, nevinnost",
        "image": "00-the-fool.png"
    },
    {
        "id": 1,
        "name": "Mág",
        "type": "Velká Arkána",
        "meaning": "Síla, dovednost, koncentrace, akce, vynalézavost",
        "meaningInLove": "Vášeň, přitažlivost, sexuální energie, kreativita, výzva",
        "image": "01-the-magician.png"
    },
    {
        "id": 2,
        "name": "Velekněžka",
        "type": "Velká Arkána",
        "meaning": "Intuice, moudrost, podvědomí, ženskost, psychické schopnosti",
        "meaningInLove": "Tajemství, nevědomí, intuice, moudrost, tajemství",
        "image": "02-the-high-priestess.png"
    },
    {
        "id": 3,
        "name": "Císařovna",
        "type": "Velká Arkána",
        "meaning": "Plodnost, ženskost, krása, příroda, hojnost",
        "meaningInLove": "Matka, plodnost, ženskost, krása, příroda",
        "image": "03-the-empress.png"
    },
    {
        "id": 4,
        "name": "Císař",
        "type": "Velká Arkána",
        "meaning": "Autorita, otec, mužnost, síla, vůle",
        "image": "04-the-emperor.png"
    },
    {
        "id": 5,
        "name": "Velekněz",
        "type": "Velká Arkána",
        "meaning": "Vzdělání, tradice, víra, náboženství, morálka",
        "image": "05-the-heirophant.png"
    },
    {
        "id": 6,
        "name": "Milenci",
        "type": "Velká Arkána",
        "meaning": "Láska, vášeň, přitažlivost, vztah, rozhodnutí",
        "image": "06-the-lovers.png"
    },
    {
        "id": 7,
        "name": "Vůz",
        "type": "Velká Arkána",
        "meaning": "Pohyb, cesta, cíl, výlet, dobrodružství",
        "image": "07-the-chariot.png"
    },
    {
        "id": 8,
        "name": "Síla",
        "type": "Velká Arkána",
        "meaning": "Síla, vůle, odvaha, sebeovládání, energie",
        "image": "08-strength.png"
    },
    {
        "id": 9,
        "name": "Poustevník",
        "type": "Velká Arkána",
        "meaning": "Samota, introspekce, opatrnost, zkušenost, moudrost",
        "image": "09-the-hermit.png"
    },
    {
        "id": 10,
        "name": "Kolo Štěstí",
        "type": "Velká Arkána",
        "meaning": "Štěstí, osud, změna, příležitost, cyklus",
        "image": "10-wheel-of-fortune.png"
    },
    {
        "id": 11,
        "name": "Spravedlnost",
        "type": "Velká Arkána",
        "meaning": "Spravedlnost, rovnováha, rozhodnutí, zodpovědnost, zákon",
        "image": "11-justice.png"
    },
    {
        "id": 12,
        "name": "Viselec",
        "type": "Velká Arkána",
        "meaning": "Oběť, ztráta, zastavení, nevědomost, uvěznění",
        "image": "12-the-hanged-man.png"
    },
    {
        "id": 13,
        "name": "Smrt",
        "type": "Velká Arkána",
        "meaning": "Konec, změna, transformace, obnova, přeměna",
        "image": "13-death.png"
    },
    {
        "id": 14,
        "name": "Mírnost",
        "type": "Velká Arkána",
        "meaning": "Naděje, trpělivost, vyčkávání, zrání, odpuštění",
        "image": "14-temperance.png"
    },
    {
        "id": 15,
        "name": "Ďábel",
        "type": "Velká Arkána",
        "meaning": "Závislost, posedlost, vášeň, pokušení, strach",
        "image": "15-the-devil.png"
    },
    {
        "id": 16,
        "name": "Věž",
        "type": "Velká Arkána",
        "meaning": "Změna, zničení, katastrofa, zmatek, chaos",
        "image": "16-the-tower.png"
    },
    {
        "id": 17,
        "name": "Hvězda",
        "type": "Velká Arkána",
        "meaning": "Naděje, inspirace, spiritualita, optimismus, jasnozřivost",
        "image": "17-the-star.png"
    },
    {
        "id": 18,
        "name": "Měsíc",
        "type": "Velká Arkána",
        "meaning": "Intuice, podvědomí, fantazie, iluze, nejistota",
        "image": "18-the-moon.png"
    },
    {
        "id": 19,
        "name": "Slunce",
        "type": "Velká Arkána",
        "meaning": "Radost, štěstí, úspěch, zdraví, energie",
        "image": "19-the-sun.png"
    },
    {
        "id": 20,
        "name": "Poslední soud",
        "type": "Velká Arkána",
        "meaning": "Osvobození, vysvobození, vítězství, odměna, osud",
        "image": "20-judgement.png"
    },
    {
        "id": 21,
        "name": "Svět",
        "type": "Velká Arkána",
        "meaning": "Dokonalost, úplnost, úspěch, dokončení, cesta",
        "image": "21-the-world.png"
    },
    {
        "id": 22,
        "name": "Eso holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Vůle, síla, energie, výkon, výdrž",
        "image": "W01-ace-of-wands.png"
    },
    {
        "id": 23,
        "name": "Dvojka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Rozhodnutí, rovnováha, spolupráce, přátelství, harmonie",
        "image": "W02-two-of-wands.png"
    },
    {
        "id": 24,
        "name": "Trojka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Růst, rozvoj, plodnost, tvořivost, vize",
        "image": "W03-three-of-wands.png"
    },
    {
        "id": 25,
        "name": "Čtyřka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Stabilita, zabezpečení, zdraví, úspěch, výsledky",
        "image": "W04-four-of-wands.png"
    },
    {
        "id": 26,
        "name": "Pětka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Nepřátelství, ztráta, nesnáze, neúspěch, zklamání",
        "image": "W05-five-of-wands.png"
    },
    {
        "id": 27,
        "name": "Šestka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Úspěch, vítězství, odměna, výhra, vítěz",
        "image": "W06-six-of-wands.png"
    },
    {
        "id": 28,
        "name": "Sedmička holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Překážky, zpoždění, nesnáze, nejistota, pochybnosti",
        "image": "W07-seven-of-wands.png"
    },
    {
        "id": 29,
        "name": "Osmička holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Překonání, odhodlání, síla, vítězství, úspěch",
        "image": "W08-eight-of-wands.png"
    },
    {
        "id": 30,
        "name": "Devítka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Naděje, optimismus, úleva, pomoc, podpora",
        "image": "W09-nine-of-wands.png"
    },
    {
        "id": 31,
        "name": "Desítka holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Zátěž, břemeno, přetížení, vyčerpání, ztráta",
        "image": "W10-ten-of-wands.png"
    },
    {
        "id": 32,
        "name": "Páže holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Zprávy, zvědavost, zvědavost, zvědavost, zvědavost",
        "image": "W11-page-of-wands.png"
    },
    {
        "id": 33,
        "name": "Rytíř holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Akce, pohyb, cesta, výlet, dobrodružství",
        "image": "W12-knight-of-wands.png"
    },
    {
        "id": 34,
        "name": "Královna holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "W13-queen-of-wands.png"
    },
    {
        "id": 35,
        "name": "Král holí",
        "type": "Malá Arkána",
        "subtype": "Hole",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "W14-king-of-wands.png"
    },
    {
        "id": 36,
        "name": "Eso pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C01-ace-of-cups.png"
    },
    {
        "id": 37,
        "name": "Dvojka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C02-two-of-cups.png"
    },
    {
        "id": 38,
        "name": "Trojka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C03-three-of-cups.png"
    },
    {
        "id": 39,
        "name": "Čtyřka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C04-four-of-cups.png"
    },
    {
        "id": 40,
        "name": "Pětka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C05-five-of-cups.png"
    },
    {
        "id": 41,
        "name": "Šestka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C06-six-of-cups.png"
    },
    {
        "id": 42,
        "name": "Sedmička pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C07-seven-of-cups.png"
    },
    {
        "id": 43,
        "name": "Osmička pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C08-eight-of-cups.png"
    },
    {
        "id": 44,
        "name": "Devítka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C09-nine-of-cups.png"
    },
    {
        "id": 45,
        "name": "Desítka pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C10-ten-of-cups.png"
    },
    {
        "id": 46,
        "name": "Páže pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C11-page-of-cups.png"
    },
    {
        "id": 47,
        "name": "Rytíř pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C12-knight-of-cups.png"
    },
    {
        "id": 48,
        "name": "Královna pohárů",
        "type": "Malá Arkána",
        "subtype": "Poháry",
        "meaning": "Láska, radost, štěstí, naděje, inspirace",
        "image": "C13-queen-of-cups.png"
    },
    {
        "id": 49,
        "name": "Eso mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Bolest, ztráta, boj, zranění, bolest",
        "image": "S01-ace-of-swords.png"
    },
    {
        "id": 50,
        "name": "Dvojka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Rozhodnutí, rovnováha, spolupráce, přátelství, harmonie",
        "image": "S02-two-of-swords.png"
    },
    {
        "id": 51,
        "name": "Trojka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Růst, rozvoj, plodnost, tvořivost, vize",
        "image": "S03-three-of-swords.png"
    },
    {
        "id": 52,
        "name": "Čtyřka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Stabilita, zabezpečení, zdraví, úspěch, výsledky",
        "image": "S04-four-of-swords.png"
    },
    {
        "id": 53,
        "name": "Pětka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Nepřátelství, ztráta, nesnáze, neúspěch, zklamání",
        "image": "S05-five-of-swords.png"
    },
    {
        "id": 54,
        "name": "Šestka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Úspěch, vítězství, odměna, výhra, vítěz",
        "image": "S06-six-of-swords.png"
    },
    {
        "id": 55,
        "name": "Sedmička mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Překážky, zpoždění, nesnáze, nejistota, pochybnosti",
        "image": "S07-seven-of-swords.png"
    },
    {
        "id": 56,
        "name": "Osmička mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Překonání, odhodlání, síla, vítězství, úspěch",
        "image": "S08-eight-of-swords.png"
    },
    {
        "id": 57,
        "name": "Devítka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Naděje, optimismus, úleva, pomoc, podpora",
        "image": "S09-nine-of-swords.png"
    },
    {
        "id": 58,
        "name": "Desítka mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Zátěž, břemeno, přetížení, vyčerpání, ztráta",
        "image": "S10-ten-of-swords.png"
    },
    {
        "id": 59,
        "name": "Páže mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Zprávy, zvědavost, zvědavost, zvědavost, zvědavost",
        "image": "S11-page-of-swords.png"
    },
    {
        "id": 60,
        "name": "Rytíř mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Akce, pohyb, cesta, výlet, dobrodružství",
        "image": "S12-knight-of-swords.png"
    },
    {
        "id": 61,
        "name": "Královna mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "S13-queen-of-swords.png"
    },
    {
        "id": 62,
        "name": "Král mečů",
        "type": "Malá Arkána",
        "subtype": "Meče",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "S14-king-of-swords.png"
    },
    {
        "id": 63,
        "name": "Eso pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Bohatství, prosperita, úspěch, zabezpečení, zisk",
        "image": "P01-ace-of-pentacles.png"
    },
    {
        "id": 64,
        "name": "Dvojka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Rozhodnutí, rovnováha, spolupráce, přátelství, harmonie",
        "image": "P02-two-of-pentacles.png"
    },
    {
        "id": 65,
        "name": "Trojka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Růst, rozvoj, plodnost, tvořivost, vize",
        "image": "P03-three-of-pentacles.png"
    },
    {
        "id": 66,
        "name": "Čtyřka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Stabilita, zabezpečení, zdraví, úspěch, výsledky",
        "image": "P04-four-of-pentacles.png"
    },
    {
        "id": 67,
        "name": "Pětka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Nepřátelství, ztráta, nesnáze, neúspěch, zklamání",
        "image": "P05-five-of-pentacles.png"
    },
    {
        "id": 68,
        "name": "Šestka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Úspěch, vítězství, odměna, výhra, vítěz",
        "image": "P06-six-of-pentacles.png"
    },
    {
        "id": 69,
        "name": "Sedmička pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Překážky, zpoždění, nesnáze, nejistota, pochybnosti",
        "image": "P07-seven-of-pentacles.png"
    },
    {
        "id": 70,
        "name": "Osmička pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Překonání, odhodlání, síla, vítězství, úspěch",
        "image": "P08-eight-of-pentacles.png"
    },
    {
        "id": 71,
        "name": "Devítka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Naděje, optimismus, úleva, pomoc, podpora",
        "image": "P09-nine-of-pentacles.png"
    },
    {
        "id": 72,
        "name": "Desítka pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Zátěž, břemeno, přetížení, vyčerpání, ztráta",
        "image": "P10-ten-of-pentacles.png"
    },
    {
        "id": 73,
        "name": "Páže pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Zprávy, zvědavost, zvědavost, zvědavost, zvědavost",
        "image": "P11-page-of-pentacles.png"
    },
    {
        "id": 74,
        "name": "Rytíř pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Akce, pohyb, cesta, výlet, dobrodružství",
        "image": "P12-knight-of-pentacles.png"
    },
    {
        "id": 75,
        "name": "Královna pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "P13-queen-of-pentacles.png"
    },
    {
        "id": 76,
        "name": "Král pentaklů",
        "type": "Malá Arkána",
        "subtype": "Pentakly",
        "meaning": "Vůdčí schopnosti, síla, energie, výkon, výdrž",
        "image": "P14-king-of-pentacles.png"
    }
]

export default cards;