export class App {
  constructor() {
    this.title = 'PartijKiezer';
    this.subtitle = 'De beste partijen voor jou!';
    this.ingredientsTitle = 'Wat wil je (niet) ?';
  }

  reset() {
    this.ingredientsViewModel.resetIngredients();
    this.pizzasViewModel.resetPizzas();
  }
}
