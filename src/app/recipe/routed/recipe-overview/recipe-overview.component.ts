import { Component, OnInit, Testability, Input } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})

export class RecipeOverviewComponent implements OnInit {

  // @Input()
  // recipe: Observable<Recipe>;

  recipe: Recipe;

  idRecipe = '';

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute) {
    this.idRecipe = this._route.snapshot.paramMap.get('id');

    this._recipeService.getRecipe(this.idRecipe).subscribe(recipe => this.recipe = recipe);

  }

  ngOnInit() {
    console.log(this.idRecipe);
    console.log(this.recipe);
  }

}
