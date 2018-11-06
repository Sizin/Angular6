import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),
        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]), {optional: true} ),
        query('.col', [
          animate(1000, style('*'))
        ], {optional: true})
      ])
    ])
  ]
})
export class RecipeListComponent implements OnInit {

  @Input()
  recipes: Recipe[];

  // constructor() {
  //   console.log('constructor', this.recipes);

  // }

  // Commee Autowired de Spring on importe le service
  constructor(private _recipeService: RecipeService) {
    // this._recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
    this._recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);

  }

  ngOnInit() {
    console.log('ngOnInit', this.recipes);

  }

  emitDelete(recipe) {
    console.log(recipe);
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
