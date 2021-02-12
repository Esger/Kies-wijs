import { inject, bindable } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class PizzaListCustomElement {

	constructor(eventAggregator) {
		this.ea = eventAggregator;
		this.showList = false;
		this.parties = [
			{
				"naam": "VVD",
				"gewicht": "1.00",
				"nummer": 1,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven',]
			},
			{
				"naam": "PVV (Partij voor de Vrijheid)",
				"gewicht": "1.00",
				"nummer": 2,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'sociale huurwoningen',]
			}, {
				"naam": "CDA",
				"gewicht": "1.00",
				"nummer": 3,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'middenschool', 'religieus']
			}, {
				"naam": "D66",
				"gewicht": "1.00",
				"nummer": 4,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'vluchtelingen opnemen']
			}, {
				"naam": "GROENLINKS",
				"gewicht": "1.00",
				"nummer": 5,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "SP (Socialistische Partij) ",
				"gewicht": "1.00",
				"nummer": 6,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "Partij van de Arbeid (P.v.d.A.)",
				"gewicht": "1.00",
				"nummer": 7,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "ChristenUnie",
				"gewicht": "1.00",
				"nummer": 8,
				"sortingWeight": 0,
				"ingredienten": ['~boerenbedrijven', 'sociale huurwoningen', 'religieus', 'vluchtelingen opnemen']
			}, {
				"naam": "Partij voor de Dieren",
				"gewicht": "1.00",
				"nummer": 9,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'mondkapjesplicht', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "50PLUS",
				"gewicht": "1.00",
				"nummer": 10,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen',]
			}, {
				"naam": "Staatkundig Gereformeerde Partij (SGP)",
				"gewicht": "1.00",
				"nummer": 11,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'mondkapjesplicht', 'religieus']
			}, {
				"naam": "DENK",
				"gewicht": "1.00",
				"nummer": 12,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'mondkapjesplicht', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "Forum voor Democratie",
				"gewicht": "1.00",
				"nummer": 13,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'mondkapjesplicht']
			}, {
				"naam": "BIJ1",
				"gewicht": "1.00",
				"nummer": 14,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "JA21",
				"gewicht": "1.00",
				"nummer": 15,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', '~mondkapjesplicht']
			}, {
				"naam": "CODE ORANJE",
				"gewicht": "1.00",
				"nummer": 16,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'sociale huurwoningen', 'mondkapjesplicht']
			}, {
				"naam": "Volt",
				"gewicht": "1.00",
				"nummer": 17,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'vluchtelingen opnemen']
			}, {
				"naam": "NIDA",
				"gewicht": "1.00",
				"nummer": 18,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'mondkapjesplicht', 'vluchtelingen opnemen']
			}, {
				"naam": "Piratenpartij",
				"gewicht": "1.00",
				"nummer": 19,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'democratische vernieuwing', 'sociale huurwoningen', 'mondkapjesplicht', 'vluchtelingen opnemen']
			}, {
				"naam": "LP (Libertaire Partij)",
				"gewicht": "1.00",
				"nummer": 20,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'mondkapjesplicht']
			}, {
				"naam": "JONG",
				"gewicht": "1.00",
				"nummer": 21,
				"sortingWeight": 0,
				"ingredienten": ['sociale huurwoningen',]
			}, {
				"naam": "Splinter",
				"gewicht": "1.00",
				"nummer": 22,
				"sortingWeight": 0,
				"ingredienten": ['middenschool', 'sociale huurwoningen', 'mondkapjesplicht']
			}, {
				"naam": "BoerBurgerBeweging",
				"gewicht": "1.00",
				"nummer": 23,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'middenschool', 'mondkapjesplicht']
			}, {
				"naam": "NLBeter",
				"gewicht": "1.00",
				"nummer": 24,
				"sortingWeight": 0,
				"ingredienten": ['sociale huurwoningen', 'vluchtelingen opnemen']
			}, {
				"naam": "Lijst Henk Krol",
				"gewicht": "1.00",
				"nummer": 25,
				"sortingWeight": 0,
				"ingredienten": ['mondkapjesplicht']
			}, {
				"naam": "OPRECHT",
				"gewicht": "1.00",
				"nummer": 26,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'sociale huurwoningen', '~middenschool', 'mondkapjesplicht']
			}, {
				"naam": "JEZUS LEEFT",
				"gewicht": "1.00",
				"nummer": 27,
				"sortingWeight": 0,
				"ingredienten": ['boerenbedrijven', 'middenschool', 'mondkapjesplicht', 'religieus']
			}, {
				"naam": "Trots op Nederland (TROTS)",
				"gewicht": "1.00",
				"nummer": 28,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "U-Buntu Connected Front",
				"gewicht": "1.00",
				"nummer": 29,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Blanco lijst met als eerste kandidaat Zeven, A.J.L.B.",
				"gewicht": "1.00",
				"nummer": 30,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Partij van de Eenheid",
				"gewicht": "1.00",
				"nummer": 32,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "DE FEESTPARTIJ (DFP)",
				"gewicht": "1.00",
				"nummer": 33,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Vrij en Sociaal Nederland",
				"gewicht": "1.00",
				"nummer": 34,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Wij zijn Nederland",
				"gewicht": "1.00",
				"nummer": 35,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Modern Nederland",
				"gewicht": "1.00",
				"nummer": 36,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "De Groenen",
				"gewicht": "1.00",
				"nummer": 37,
				"sortingWeight": 0,
				"ingredienten": []
			}, {
				"naam": "Partij voor de Republiek",
				"gewicht": "1.00",
				"nummer": 38,
				"sortingWeight": 0,
				"ingredienten": []
			}
		];
	}

	attached() {
		this.showList = true;
		this._upSubscriber = this.ea.subscribe("upPreference", response => {
			this.updatePreferences(response, 1);
		});
		this._downSubscriber = this.ea.subscribe("downPreference", response => {
			this.updatePreferences(response, -1);
		});
	}

	detached() {
		this._upSubscriber.dispose();
		this._downSubscriber.dispose();
	}

	updatePreferences(ingredient, d) {
		this.showList = !this.showList;
		this.parties.forEach(party => {
			if (party.ingredienten.includes('~' + ingredient.name.toLowerCase())) {
				// Negeren
			} else {
				if (party.ingredienten.includes(ingredient.name.toLowerCase())) {
					party.sortingWeight += d;
				} else {
					party.sortingWeight -= d;
				}
			}
		});
		setTimeout(() => {
			this.showList = !this.showList;
		}, 0);
	}

}
