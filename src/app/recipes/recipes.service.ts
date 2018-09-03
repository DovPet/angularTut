import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Test Name', 'Test Description', 'https://s2.15min.lt/static/cache/ODgweDU4MCwweDAsNjE2MzUwLG9yaWdpbmFsLCxpZD01OTY0NjkmZGF0ZT0yMDEyJTJGMDklMkYyNSwzMDU1NzE3ODY3/lazaniija-su-vistiena-50617b8b73c47.jpg',
        [new Ingredient('Meat', 200),
         new Ingredient('Pasta', 400)]),
        // tslint:disable-next-line:max-line-length
        new Recipe('Test Name2', 'Test Description2', 'https://s2.15min.lt/static/cache/ODgweDU4MCwweDAsNjE2MzUwLG9yaWdpbmFsLCxpZD01OTY0NjkmZGF0ZT0yMDEyJTJGMDklMkYyNSwzMDU1NzE3ODY3/lazaniija-su-vistiena-50617b8b73c47.jpg',
        [new Ingredient('Patatoe', 5),
        new Ingredient('Oniion', 1)])
      ];
constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes[id];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
