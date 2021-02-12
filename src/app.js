export class App {
	constructor() {
		this.title = 'PartijenKiezer';
		this.subtitle = 'De beste partijen voor jou!';
		this.ingredientsTitle = 'Wat wil je (niet) ?';
	}

	reset() {
		this.ingredientsViewModel.resetIngredients();
		this.partiesViewModel.resetPizzas();
	}
}
