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
				"gewicht": "1.00",
				"nummer": 1,
				"sortingWeight": 0,
				"ingredienten": ""
			},
			{
				"naam": "PVV (Partij voor de Vrijheid)",
				"gewicht": "1.00",
				"nummer": 2,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "CDA",
				"gewicht": "1.00",
				"nummer": 3,
				"sortingWeight": 0,
				"ingredienten": "religieus"
			}, {
				"naam": "D66",
				"gewicht": "1.00",
				"nummer": 4,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "GROENLINKS",
				"gewicht": "1.00",
				"nummer": 5,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Partij van de Arbeid (P.v.d.A.)",
				"gewicht": "1.00",
				"nummer": 7,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "ChristenUnie",
				"gewicht": "1.00",
				"nummer": 8,
				"sortingWeight": 0,
				"ingredienten": "religieus"
			}, {
				"naam": "Partij voor de Dieren",
				"gewicht": "1.00",
				"nummer": 9,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "50PLUS",
				"gewicht": "1.00",
				"nummer": 10,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Staatkundig Gereformeerde Partij (SGP)",
				"gewicht": "1.00",
				"nummer": 11,
				"sortingWeight": 0,
				"ingredienten": "religieus"
			}, {
				"naam": "DENK",
				"gewicht": "1.00",
				"nummer": 12,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Forum voor Democratie",
				"gewicht": "1.00",
				"nummer": 13,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "BIJ1",
				"gewicht": "1.00",
				"nummer": 14,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "JA21",
				"gewicht": "1.00",
				"nummer": 15,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "CODE ORANJE",
				"gewicht": "1.00",
				"nummer": 16,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Volt",
				"gewicht": "1.00",
				"nummer": 17,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "NIDA",
				"gewicht": "1.00",
				"nummer": 18,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Piratenpartij",
				"gewicht": "1.00",
				"nummer": 19,
				"sortingWeight": 0,
				"ingredienten": ['democratische vernieuwing']
			}, {
				"naam": "LP (Libertaire Partij)",
				"gewicht": "1.00",
				"nummer": 20,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "JONG",
				"gewicht": "1.00",
				"nummer": 21,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Splinter",
				"gewicht": "1.00",
				"nummer": 22,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "BBB",
				"gewicht": "1.00",
				"nummer": 23,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "NLBeter",
				"gewicht": "1.00",
				"nummer": 24,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Lijst Henk Krol",
				"gewicht": "1.00",
				"nummer": 25,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "OPRECHT",
				"gewicht": "1.00",
				"nummer": 26,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "JEZUS LEEFT",
				"gewicht": "1.00",
				"nummer": 27,
				"sortingWeight": 0,
				"ingredienten": "religieus"
			}, {
				"naam": "Trots op Nederland (TROTS)",
				"gewicht": "1.00",
				"nummer": 28,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "U-Buntu Connected Front",
				"gewicht": "1.00",
				"nummer": 29,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Blanco lijst met als eerste kandidaat Zeven, A.J.L.B.",
				"gewicht": "1.00",
				"nummer": 30,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Partij van de Eenheid",
				"gewicht": "1.00",
				"nummer": 32,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "DE FEESTPARTIJ (DFP)",
				"gewicht": "1.00",
				"nummer": 33,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Vrij en Sociaal Nederland",
				"gewicht": "1.00",
				"nummer": 34,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Wij zijn Nederland",
				"gewicht": "1.00",
				"nummer": 35,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Modern Nederland",
				"gewicht": "1.00",
				"nummer": 36,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "De Groenen",
				"gewicht": "1.00",
				"nummer": 37,
				"sortingWeight": 0,
				"ingredienten": ""
			}, {
				"naam": "Partij voor de Republiek",
				"gewicht": "1.00",
				"nummer": 38,
				"sortingWeight": 0,
				"ingredienten": ""
			}
		];
		this.sortPartijenByName();
		this.ea.subscribe("upPreference", response => {
			this.updatePreferences(response, 1);
		});
		this.ea.subscribe("downPreference", response => {
			this.updatePreferences(response, -1);
		});
	}

	sortPartijenByName() {
		function byName(property) {
			var sortOrder = 1;
			if (property[0] === "-") {
				sortOrder = -1;
				property = property.substr(1);
			}
			return function (a, b) {
				/* next line works with strings and numbers, 
				 * and you may want to customize it to your needs
				 */
				var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
				return result * sortOrder;
			};
		}

		const sortedPizzas = this.pizzas.sort(byName('naam'));
		this.pizzas = sortedPizzas;
		console.log(sortedPizzas);
	}

	updatePreferences(ingredient, d) {
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
