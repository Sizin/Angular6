import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;
  isExpanded = false;

  constructor() { }

  ngOnInit() {

  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

}
