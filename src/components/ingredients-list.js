import { inject, bindable } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class IngredientsListCustomElement {

  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.ingredients = [
      {
        "name": "democratische vernieuwing",
        "pref": 0
      },
      {
        "name": "religieus",
        "pref": 0
      },
      {
        "name": "kernenergie",
        "pref": 0
      },
      {
        "name": "windmolens",
        "pref": 0
      }
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
