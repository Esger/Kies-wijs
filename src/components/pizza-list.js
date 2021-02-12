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
				"ingredienten": ['boerenbedrijven', 'defensiebudget', 'gevangenisstraffen', 'inburgering op locatie', '~inkomen leraren', 'kerncentrale', 'koppeling minimumloon en bijstand', '~legalisering softdrugs', 'nederlandstalig hoger onderwijs', 'publieke omroep', '~rekeningrijden', 'vaccinatiebewijs', 'volkshuisvesting', 'voltooid leven', 'vuurwerk',]
			},
			{
				"naam": "PVV (Partij voor de Vrijheid)",
				"gewicht": "1.00",
				"nummer": 2,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', 'europese unie verlaten', 'gevangenisstraffen', 'inburgering op locatie', 'inkomen leraren', 'kerncentrale', 'koppeling minimumloon en bijstand', 'nederlandstalig hoger onderwijs', 'publieke omroep', 'sociale huurwoningen', 'volkshuisvesting', '~voltooid leven', 'vuurwerk', '~woningen op landbouwgrond', '~zorgfonds',]
			}, {
				"naam": "CDA",
				"gewicht": "1.00",
				"nummer": 3,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'boerenbedrijven', 'defensiebudget', 'gevangenisstraffen', 'gratis kinderopvang', 'inkomen leraren', 'inburgering op locatie', 'kerncentrale', 'middenschool', 'nederlandstalig hoger onderwijs', 'religieus', 'volkshuisvesting', 'vuurwerk', 'woningen op landbouwgrond',]
			}, {
				"naam": "D66",
				"gewicht": "1.00",
				"nummer": 4,
				"sortingWeight": 0,
				"ingredienten": ['correctief referendum', 'btw op kunst en cultuur', 'defensiebudget', 'excuses slavenhandel', 'gratis kinderopvang', 'inkomen leraren', '~kerncentrale', 'legalisering softdrugs', 'middenschool', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'vaccinatiebewijs', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'voltooid leven', 'vuurwerk', 'woningen op landbouwgrond',]
			}, {
				"naam": "GROENLINKS",
				"gewicht": "1.00",
				"nummer": 5,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'excuses slavenhandel', 'gezichtsbedekkende kleding', 'gratis kinderopvang', 'inkomen leraren', 'legalisering softdrugs', 'middenschool', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'voltooid leven', '~woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "SP (Socialistische Partij) ",
				"gewicht": "1.00",
				"nummer": 6,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'correctief referendum', 'excuses slavenhandel', 'gratis kinderopvang', 'inkomen leraren', 'legalisering softdrugs', 'middenschool', '~nederlandstalig hoger onderwijs', 'sociale huurwoningen', 'vluchtelingen opnemen', '~volkshuisvesting', 'vuurwerk', 'woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "Partij van de Arbeid (P.v.d.A.)",
				"gewicht": "1.00",
				"nummer": 7,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'correctief referendum', 'defensiebudget', 'excuses slavenhandel', 'gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', 'legalisering softdrugs', 'middenschool', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'vliegbelasting', 'vluchtelingen opnemen', 'volkshuisvesting', 'voltooid leven', 'woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "ChristenUnie",
				"gewicht": "1.00",
				"nummer": 8,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'correctief referendum', '~boerenbedrijven', 'defensiebudget', 'excuses slavenhandel', '~gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', '~kerncentrale', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'religieus', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'woningen op landbouwgrond',]
			}, {
				"naam": "Partij voor de Dieren",
				"gewicht": "1.00",
				"nummer": 9,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'correctief referendum', 'excuses slavenhandel', 'gratis kinderopvang', 'inkomen leraren', 'legalisering softdrugs', 'middenschool', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'volkshuisvesting', 'voltooid leven', 'woningen op landbouwgrond',]
			}, {
				"naam": "50PLUS",
				"gewicht": "1.00",
				"nummer": 10,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'gratis kinderopvang', 'inburgering op locatie', 'legalisering softdrugs', 'kerncentrale', 'koppeling minimumloon en bijstand', 'middenschool', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'vaccinatiebewijs', 'volkshuisvesting', 'voltooid leven', 'woningen op landbouwgrond',]
			}, {
				"naam": "Staatkundig Gereformeerde Partij (SGP)",
				"gewicht": "1.00",
				"nummer": 11,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'boerenbedrijven', 'defensiebudget', 'gevangenisstraffen', 'inkomen leraren', 'kerncentrale', 'koppeling minimumloon en bijstand', 'nederlandstalig hoger onderwijs', 'publieke omroep', 'rekeningrijden', '~sociale huurwoningen', 'mondkapjesplicht', 'religieus', 'vliegbelasting', '~woningen op landbouwgrond',]
			}, {
				"naam": "DENK",
				"gewicht": "1.00",
				"nummer": 12,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'correctief referendum', 'gezichtsbedekkende kleding', '~gratis kinderopvang', 'excuses slavenhandel', 'inkomen leraren', 'middenschool', 'mondkapjesplicht', 'publieke omroep', 'rekeningrijden', 'sociale huurwoningen', 'vluchtelingen opnemen', 'volkshuisvesting', 'woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "Forum voor Democratie",
				"gewicht": "1.00",
				"nummer": 13,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', 'europese unie verlaten', 'gevangenisstraffen', 'inburgering op locatie', 'kerncentrale', 'koppeling minimumloon en bijstand', 'legalisering softdrugs', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', 'vuurwerk',]
			}, {
				"naam": "BIJ1",
				"gewicht": "1.00",
				"nummer": 14,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'excuses slavenhandel', 'gezichtsbedekkende kleding', 'gratis kinderopvang', 'inkomen leraren', 'legalisering softdrugs', 'middenschool', 'rekeningrijden', 'sociale huurwoningen', 'vaccinatiebewijs', 'vliegbelasting', 'vluchtelingen opnemen', 'voltooid leven', 'zorgfonds',]
			}, {
				"naam": "JA21",
				"gewicht": "1.00",
				"nummer": 15,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'inburgering op locatie', 'kerncentrale', 'koppeling minimumloon en bijstand', 'legalisering softdrugs', '~mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', '~rekeningrijden', 'vuurwerk', '~woningen op landbouwgrond',]
			}, {
				"naam": "CODE ORANJE",
				"gewicht": "1.00",
				"nummer": 16,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', '~europese unie verlaten', 'gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', 'kerncentrale', 'koppeling minimumloon en bijstand', 'legalisering softdrugs', 'publieke omroep', 'sociale huurwoningen', 'mondkapjesplicht', 'voltooid leven', 'vuurwerk', 'zorgfonds',]
			}, {
				"naam": "Volt",
				"gewicht": "1.00",
				"nummer": 17,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'defensiebudget', 'excuses slavenhandel', 'gezichtsbedekkende kleding', 'gratis kinderopvang', '~inkomen leraren', 'kerncentrale', 'legalisering softdrugs', 'middenschool', 'rekeningrijden', 'vaccinatiebewijs', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'volkshuisvesting', 'voltooid leven', 'woningen op landbouwgrond',]
			}, {
				"naam": "NIDA",
				"gewicht": "1.00",
				"nummer": 18,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'excuses slavenhandel', 'gezichtsbedekkende kleding', 'gratis kinderopvang', 'inkomen leraren', '~kerncentrale', 'middenschool', 'rekeningrijden', 'sociale huurwoningen', 'mondkapjesplicht', 'vluchtelingen opnemen', 'zorgfonds',]
			}, {
				"naam": "Piratenpartij",
				"gewicht": "1.00",
				"nummer": 19,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'correctief referendum', 'excuses slavenhandel', 'gezichtsbedekkende kleding', 'gratis kinderopvang', 'inkomen leraren', '~kerncentrale', 'legalisering softdrugs', 'middenschool', 'democratische vernieuwing', 'sociale huurwoningen', 'mondkapjesplicht', 'vliegbelasting', 'vluchtelingen opnemen', 'voltooid leven', 'vuurwerk', 'woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "LP (Libertaire Partij)",
				"gewicht": "1.00",
				"nummer": 20,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'boerenbedrijven', 'correctief referendum', '~defensiebudget', '~europese unie verlaten', 'gezichtsbedekkende kleding', '~inburgering op locatie', 'kerncentrale', '~koppeling minimumloon en bijstand', 'legalisering softdrugs', 'mondkapjesplicht', 'publieke omroep', 'rekeningrijden', 'vaccinatiebewijs', 'voltooid leven', 'vuurwerk', '~woningen op landbouwgrond',]
			}, {
				"naam": "JONG",
				"gewicht": "1.00",
				"nummer": 21,
				"sortingWeight": 0,
				"ingredienten": ['correctief referendum', '~defensiebudget', 'excuses slavenhandel', 'gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', 'kerncentrale', 'legalisering softdrugs', '~publieke omroep', 'rekeningrijden', 'sociale huurwoningen', 'vaccinatiebewijs', 'vleesbelasting', 'vliegbelasting', 'voltooid leven', 'zorgfonds',]
			}, {
				"naam": "Splinter",
				"gewicht": "1.00",
				"nummer": 22,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'correctief referendum', 'defensiebudget', 'gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', '~kerncentrale', 'legalisering softdrugs', 'middenschool', 'sociale huurwoningen', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'vleesbelasting', 'vliegbelasting', 'voltooid leven', 'woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "BoerBurgerBeweging",
				"gewicht": "1.00",
				"nummer": 23,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'gratis kinderopvang', 'inburgering op locatie', 'kerncentrale', 'koppeling minimumloon en bijstand', 'legalisering softdrugs', 'middenschool', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', 'vliegbelasting', 'voltooid leven', 'vuurwerk', 'zorgfonds',]
			}, {
				"naam": "NLBeter",
				"gewicht": "1.00",
				"nummer": 24,
				"sortingWeight": 0,
				"ingredienten": ['btw op kunst en cultuur', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'gratis kinderopvang', 'inburgering op locatie', 'inkomen leraren', '~kerncentrale', 'koppeling minimumloon en bijstand', 'legalisering softdrugs', 'nederlandstalig hoger onderwijs', 'rekeningrijden', 'sociale huurwoningen', 'vaccinatiebewijs', 'vleesbelasting', 'vliegbelasting', 'vluchtelingen opnemen', 'zorgfonds',]
			}, {
				"naam": "Lijst Henk Krol",
				"gewicht": "1.00",
				"nummer": 25,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'inburgering op locatie', 'kerncentrale', 'legalisering softdrugs', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', '~rekeningrijden', '~volkshuisvesting', 'voltooid leven', '~vuurwerk', 'zorgfonds',]
			}, {
				"naam": "OPRECHT",
				"gewicht": "1.00",
				"nummer": 26,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'boerenbedrijven', 'correctief referendum', 'defensiebudget', 'gevangenisstraffen', 'gratis kinderopvang', 'inburgering op locatie', 'kerncentrale', 'koppeling minimumloon en bijstand', '~middenschool', 'sociale huurwoningen', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', '~rekeningrijden', 'vliegbelasting', '~volkshuisvesting', '~voltooid leven', 'vuurwerk', '~woningen op landbouwgrond', 'zorgfonds',]
			}, {
				"naam": "JEZUS LEEFT",
				"gewicht": "1.00",
				"nummer": 27,
				"sortingWeight": 0,
				"ingredienten": ['belastingvoordeel huishoudens', 'btw op kunst en cultuur', 'boerenbedrijven', 'correctief referendum', 'europese unie verlaten', '~inburgering op locatie', 'koppeling minimumloon en bijstand', 'middenschool', 'mondkapjesplicht', 'nederlandstalig hoger onderwijs', 'publieke omroep', 'religieus', 'rekeningrijden', 'vliegbelasting', 'woningen op landbouwgrond',]
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

export class IngredientenLijstValueConverter {
	toView(array) {
		const theString = array.filter(item => !item.includes('~')).join(', ');
		return theString;
	}
}
