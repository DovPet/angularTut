import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '../../../node_modules/@angular/core';
import { Subject } from '../../../node_modules/rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 7)
      ];
getIngredients() {
    return this.ingredients.slice();
}
addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients: Ingredient[]) {
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
}

}
