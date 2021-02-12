import { inject, bindable } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class IngredientsListCustomElement {

	constructor(eventAggregator) {
		this.ea = eventAggregator;
		this.ingredients = [
			{
				"name": "burgerraden",
				"pref": 0
			},
			{
				"name": "corona",
				"pref": 0
			},
			{
				"name": "Belastingvoordeel huishoudens",
				"text": "Huishoudens met twee partners waarvan er één werkt, moeten net zoveel belastingvoordeel krijgen als huishoudens met twee werkende partners.",
				"pref": 0
			},
			{
				"name": "Boerenbedrijven",
				"text": "Er moeten geen nieuwe beperkingen komen op de activiteiten van boerenbedrijven.",
				"pref": 0
			},
			{
				"name": "Btw op kunst en cultuur",
				"text": "De regering moet de btw op culturele activiteiten verlagen naar 5 procent.",
				"pref": 0
			},
			{
				"name": "Correctief referendum",
				"text": "Burgers moeten de mogelijkheid krijgen om door het parlement aangenomen wetten tegen te houden via een referendum.",
				"pref": 0
			},
			{
				"name": "Defensiebudget",
				"text": "Nederland moet meer geld uitgeven aan defensie.",
				"pref": 0
			},
			{
				"name": "Europese Unie verlaten",
				"text": "Nederland moet uit de Europese Unie(EU) stappen.",
				"pref": 0
			},
			{
				"name": "Excuses slavenhandel",
				"text": "De Nederlandse regering moet excuses aanbieden voor de slavenhandel in het verleden.",
				"pref": 0
			},
			{
				"name": "Gevangenisstraffen",
				"text": "Er moeten minder mogelijkheden komen om taakstraffen op te leggen in plaats van gevangenisstraffen.",
				"pref": 0
			},
			{
				"name": "Gezichtsbedekkende kleding",
				"text": "De regering moet het verbod op gezichtsbedekkende kleding afschaffen.",
				"pref": 0
			},
			{
				"name": "Inburgering op locatie",
				"text": "Asielzoekers met een voorlopige verblijfsvergunning moeten eerst inburgeren voordat zij een huurwoning krijgen.",
				"pref": 0
			},
			{
				"name": "Inkomen leraren",
				"text": "Leraren op basisscholen moeten net zoveel gaan verdienen als leraren op middelbare scholen.",
				"pref": 0
			},
			{
				"name": "Kerncentrale",
				"text": "Nederland moet een nieuwe kerncentrale bouwen.",
				"pref": 0
			},
			{
				"name": "klimaat",
				"pref": 0
			},
			{
				"name": "koningshuis",
				"pref": 0
			},
			{
				"name": "koopkracht",
				"pref": 0
			},
			{
				"name": "onderwijs",
				"pref": 0
			},
			{
				"name": "Gratis kinderopvang",
				"text": "Kinderopvang moet voor alle ouders ten minste drie dagen in de week gratis worden.",
				"pref": 0
			},
			{
				"name": "Koppeling minimumloon en bijstand",
				"text": "Verhoging van de minimumlonen moet niet langer automatisch leiden tot verhoging van de bijstandsuitkeringen.",
				"pref": 0
			},
			{
				"name": "Legalisering softdrugs",
				"text": "Zowel inkoop als verkoop van softdrugs door coffeeshops moet legaal worden.",
				"pref": 0
			},
			{
				"name": "Middenschool",
				"text": "Er moet een middenschool komen, zodat leerlingen op latere leeftijd de keuze maken tussen vmbo, havo of vwo.",
				"pref": 0
			},
			{
				"name": "Mondkapjesplicht",
				"text": "Mensen moeten altijd zelf kunnen kiezen of ze een mondkapje dragen.",
				"pref": 0
			},
			{
				"name": "Nederlandstalig hoger onderwijs",
				"text": "De overheid moet onderwijs in het Nederlands vaker verplicht stellen op universiteiten en hogescholen.",
				"pref": 0
			},
			{
				"name": "Publieke omroep",
				"text": "Er moet minder geld naar de publieke omroep.",
				"pref": 0
			},
			{
				"name": "racisme & discriminatie",
				"pref": 0
			},
			{
				"name": "rekeningrijden",
				"text": "In plaats van de belasting op autobezit met er voor automobilisten een belasting komen per gereden kilometer.",
				"pref": 0
			},
			{
				"name": "religieus",
				"pref": 0
			},
			{
				"name": "Sociale huurwoningen",
				"text": "Nieuwbouwwijken moeten voor ten minste 40 procent bestaan uit sociale huurwoningen.",
				"pref": 0
			},
			{
				"name": "transparante overheid",
				"pref": 0
			},
			{
				"name": "vleesbelasting",
				"text": "Er moet een extra belasting komen op het kopen van vlees.",
				"pref": 0
			},
			{
				"name": "Vliegbelasting",
				"text": "Nederland moet een extra vliegbelasting invoeren voor korte- afstandsvluchten.",
				"pref": 0
			},
			{
				"name": "Vluchtelingen opnemen",
				"text": "Nederland moet meer vluchtelingen opnemen dan het nu doet.",
				"pref": 0
			},
			{
				"name": "Voltooid leven",
				"text": "Mensen die hun leven voltooid vinden, moeten hulp kunnen krijgen bij zelfdoding.",
				"pref": 0
			},
			{
				"name": "vuurwerk",
				"text": "Aankomende jaarwisseling moet het weer toegestaan zijn om siervuurwerk af te steken.",
				"pref": 0
			},
			{
				"name": "werkgelegenheid",
				"pref": 0
			},
			{
				"name": "Woningen op landbouwgrond",
				"text": "Er moeten woningen worden gebouwd op grond die nu voor landbouw wordt gebruikt.",
				"pref": 0
			},
			{
				"name": "Vaccinatiebewijs",
				"text": "Organisatoren van evenementen moeten bij de toegang een vaccinatiebewijs kunnen vragen.",
				"pref": 0
			},
			{
				"name": "Volkshuisvesting",
				"text": "In plaats van provincies en gemeenten moet de landelijke overheid weer beslissen waar nieuwe woonwijken worden gebouwd.",
				"pref": 0
			},
			{
				"name": "veiligheid",
				"pref": 0
			},
			{
				"name": "windmolens",
				"pref": 0
			},
			{
				"name": "zonnepanelen",
				"pref": 0
			},
			{
				"name": "zorgfonds",
				"text": "In plaat van commerciële zorgverzekeraars met er een landelijk zorgfonds komen voor iedereen.",
				"pref": 0
			},
		];
	}

	likeIngredient(ingredient, i) {
		ingredient.pref = (ingredient.pref === -1) ? 0 : 1;
		this.ea.publish("upPreference", ingredient);
	}

	dislikeIngredient(ingredient, i) {
		ingredient.pref = (ingredient.pref === 1) ? 0 : -1;
		this.ea.publish("downPreference", ingredient);
	}
}
