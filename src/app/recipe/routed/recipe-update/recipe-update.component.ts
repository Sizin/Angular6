import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  @Input()
  recipe: Recipe;

  idRecipe = '';

  recipeForm = this.fb.group({
    name: ['', Validators.required],
    picture : [''],
    description : [''],
  });


  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute, private fb: FormBuilder) {
    this.idRecipe = this._route.snapshot.paramMap.get('id');
    this._recipeService.getRecipe(this.idRecipe).subscribe(recipe => {
      this.recipe = recipe;
      console.log(this.recipe);
    });


   }

  ngOnInit() {

  }

  updateComputer() {
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.description = this.recipeForm.get('description').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this._recipeService.updateRecipe(this.recipe).subscribe(recipe => this.recipe = recipe);
  }

}
