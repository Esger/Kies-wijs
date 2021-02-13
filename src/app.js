export class App {
	constructor() {
		this.title = 'PartijenKiezer';
		this.subtitle = 'Kies ja of nee hiernaast';
		this.ingredientsTitle = 'Wijs een thema aan';
	}

	reset() {
		this.ingredientsViewModel.resetIngredients();
		this.partiesViewModel.resetPizzas();
	}
}
