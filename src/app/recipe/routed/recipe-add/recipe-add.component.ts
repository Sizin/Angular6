import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss'],
})
export class RecipeAddComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = new Recipe();
  }

  logRecipeName() {
    console.log(this.recipe.name);
    console.log(this.recipe.picture);
    console.log(this.recipe.description);
    console.log(this.recipe.instructions);
    // tslint:disable-next-line:max-line-length
    this.recipe.ingredients = [
      {
        ingredientId: 1,
        name: 'Dark rum (Appleton Estate Reserve)',
      },
      {
        ingredientId: 2,
        name: 'Fresh lime juice'
      },
      {
        ingredientId: 3,
        name: 'Simple sirup'
      }
    ] as Ingredient[];

    // tslint:disable-next-line:max-line-length
    this._recipeService
      .addRecipe(this.recipe)
      .subscribe(
        () => console.log('onNext'),
        error => console.log(error),
        () => console.log('onCompleted')
      );
  }
}
