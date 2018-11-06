import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;
  isExpanded = false;

  @Output()
  delete: EventEmitter<Recipe> = new EventEmitter();

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  deleteRecipe(id) {
    // this._recipeService
    //   .deleteRecipe(id)
    //   .subscribe(
    //     () => console.log('onNext'),
    //     error => console.log(error),
    //     () => console.log('onCompleted')
    //   );
    this._recipeService.deleteRecipe(this.recipe.id).subscribe(
      () => {
        console.log('onNext');
        this.delete.emit(this.recipe);
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }
}
