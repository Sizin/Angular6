import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RECIPES } from './recipe.mock';
import { Recipe } from '../../models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  SERVER_URL = 'http://10.0.1.136:8080/api/v1';

  constructor(private _httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // Mocking Recipe list get by a server
    return of(MOCK_RECIPES);

    // Not mocking
    // return this._httpClient.get<Recipe[]>(`${this.SERVER_URL}/recipes`);
    // Back quotes automatically concatenate strings
    // return this._httpClient.get<Recipe[]>('SERVER_URL' + '/recipes');
  }

  getRecipe(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.SERVER_URL}/recipes/${id}`);
  }

}
