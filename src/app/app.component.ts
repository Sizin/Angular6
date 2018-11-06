import { Component, OnInit } from '@angular/core';
import { MOCK_RECIPES } from './recipe/shared/recipe.mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Coucou';
  // recipes = MOCK_RECIPES;

  ngOnInit(): void {
    console.log('App.component.ts : ');
    // console.log(this.recipes);
  }
}
