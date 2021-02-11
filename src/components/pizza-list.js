import { inject, bindable } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class PizzaListCustomElement {

  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.showList = true;
    this.pizzas = [
      {
        "naam": "VVD",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.00",
        "nummer": 1,
        "sortingWeight": 0,
        "ingredienten": "ansjovis, kappertjes, tomaten, kaas"
      }, {
        "naam": "PVV (Partij voor de Vrijheid)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.00",
        "nummer": 2,
        "sortingWeight": 0,
        "ingredienten": "salami, tomaten, kaas"
      }, {
        "naam": "CDA",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.00",
        "nummer": 3,
        "sortingWeight": 0,
        "ingredienten": "religieus"
      }, {
        "naam": "D66",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "6.00",
        "nummer": 4,
        "sortingWeight": 0,
        "ingredienten": "champignons, tomaten, kaas"
      }, {
        "naam": "GROENLINKS",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.50",
        "nummer": 5,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, ansjovis, champignons, kappertjes, olijven, tomaten, kaas"
      }, {
        "naam": "Partij van de Arbeid (P.v.d.A.)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.50",
        "nummer": 7,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, garnalen, zalm, champignons, tomaten, kaas"
      }, {
        "naam": "ChristenUnie",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 8,
        "sortingWeight": 0,
        "ingredienten": "religieus"
      }, {
        "naam": "Partij voor de Dieren",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 9,
        "sortingWeight": 0,
        "ingredienten": "champignons, paprika, spaanse pepers, tomaten, uien, kaas"
      }, {
        "naam": "50PLUS",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 10,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, garnalen, zalm, paprika, tomaten, kaas"
      }, {
        "naam": "Staatkundig Gereformeerde Partij (SGP)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 11,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, tomaten, kaas"
      }, {
        "naam": "DENK",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "9.75",
        "nummer": 12,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, garnalen, zalm, champignons, olijven, paprika, tomaten, uien, kaas"
      }, {
        "naam": "Forum voor Democratie",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 13,
        "sortingWeight": 0,
        "ingredienten": "artisjokken, champignons, tomaten, uien, kaas"
      }, {
        "naam": "BIJ1",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 14,
        "sortingWeight": 0,
        "ingredienten": "garnalen, zalm, tomaten, kaas"
      }, {
        "naam": "JA21",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 15,
        "sortingWeight": 0,
        "ingredienten": "ansjovis, garnalen, tonijn, tomaten, kaas"
      }, {
        "naam": "CODE ORANJE",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 16,
        "sortingWeight": 0,
        "ingredienten": "ham, asperges, champignons, tomaten, uien, kaas"
      }, {
        "naam": "Volt",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 17,
        "sortingWeight": 0,
        "ingredienten": "ham, champignons, paprika, tomaten, uien, kaas"
      }, {
        "naam": "NIDA",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.75",
        "nummer": 18,
        "sortingWeight": 0,
        "ingredienten": "ham, champignons, tomaten, kaas"
      }, {
        "naam": "Piratenpartij",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "6.75",
        "nummer": 19,
        "sortingWeight": 0,
        "ingredienten": "salami, champignons, tomaten, kaas"
      }, {
        "naam": "LP (Libertaire Partij)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 20,
        "sortingWeight": 0,
        "ingredienten": "ham, rosbief, salami, spek, tomaten, kaas"
      }, {
        "naam": "JONG",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.25",
        "nummer": 21,
        "sortingWeight": 0,
        "ingredienten": "zeevruchten, tomaten, kaas"
      }, {
        "naam": "Splinter",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 22,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, ansjovis, artisjokken, spaanse pepers, tomaten, kaas"
      }, {
        "naam": "BBB",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 23,
        "sortingWeight": 0,
        "ingredienten": "ansjovis, garnalen, zalm, tomaten, kaas"
      }, {
        "naam": "NLBeter",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 24,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, champignons, tomaten, kaas"
      }, {
        "naam": "Lijst Henk Krol",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "6.75",
        "nummer": 25,
        "sortingWeight": 0,
        "ingredienten": "champignons, tomaten, uien, kaas"
      }, {
        "naam": "OPRECHT",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 26,
        "sortingWeight": 0,
        "ingredienten": "salami, ansjovis, champignons, olijven, paprika, tomaten, uien, kaas"
      }, {
        "naam": "JEZUS LEEFT",
        "vegetarisch": false,
        "pikant": true,
        "prijs": "8.50",
        "nummer": 27,
        "sortingWeight": 0,
        "ingredienten": "religieus"
      }, {
        "naam": "Trots op Nederland (TROTS)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 28,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, spek, champignons, tomaten, uien, kaas"
      }, {
        "naam": "U-Buntu Connected Front",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 29,
        "sortingWeight": 0,
        "ingredienten": "ei, ham, tomaten, uien, kaas"
      }, {
        "naam": "Blanco lijst met als eerste kandidaat Zeven, A.J.L.B.",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.00",
        "nummer": 30,
        "sortingWeight": 0,
        "ingredienten": "gehaktsaus, tomaten, kaas, parmezaanse kaas"
      }, {
        "naam": "Partij van de Eenheid",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 32,
        "sortingWeight": 0,
        "ingredienten": "gehaktsaus, spek, champignons, paprika, tomaten, uien, kaas, parmezaanse kaas"
      }, {
        "naam": "DE FEESTPARTIJ (DFP)",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 33,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, artisjokken, champignons, kappertjes, paprika, tomaten, kaas"
      }, {
        "naam": "Vrij en Sociaal Nederland",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "9.00",
        "nummer": 34,
        "sortingWeight": 0,
        "ingredienten": "ham, salami, spek, champignons, tomaten, uien, gorgonzola, kaas"
      }, {
        "naam": "Wij zijn Nederland",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "9.25",
        "nummer": 35,
        "sortingWeight": 0,
        "ingredienten": "gehaktsaus, ham, champignons, olijven, paprika, tomaten, gorgonzola, kaas, parmezaanse kaas"
      }, {
        "naam": "Modern Nederland",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 36,
        "sortingWeight": 0,
        "ingredienten": "tomaten, brie, gorgonzola, kaas, mozzarella"
      }, {
        "naam": "De Groenen",
        "vegetarisch": true,
        "pikant": false,
        "prijs": "8.00",
        "nummer": 37,
        "sortingWeight": 0,
        "ingredienten": "artisjokken, asperges, champignons, olijven, paprika, tomaten, uien, brie, kaas"
      }, {
        "naam": "Partij voor de Republiek",
        "vegetarisch": false,
        "pikant": false,
        "prijs": "7.50",
        "nummer": 38,
        "sortingWeight": 0,
        "ingredienten": "salami, artisjokken, asperges, olijven, tomaten, kaas"
      }
    ];
    this.ea.subscribe("upPreference", response => {
      this.updatePreferences(response, 1);
    });
    this.ea.subscribe("downPreference", response => {
      this.updatePreferences(response, -1);
    });

  }

  updatePreferences = function (ingredient, d) {
    this.showList = !this.showList;
    for (let pizza of this.pizzas) {
      if (pizza.ingredienten.includes(ingredient.name)) {
        pizza.sortingWeight += d;
      }
    }
    setTimeout(() => {
      this.showList = !this.showList;
    }, 0);
  }

}
