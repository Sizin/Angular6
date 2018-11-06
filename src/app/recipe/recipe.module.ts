import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';
import { RecipeAddComponent } from './routed/recipe-add/recipe-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './routed/recipe-update/recipe-update.component';

// You can USE what you import in what you declare
// For instance you Can use FormsModule, in RecipeAddComponent Now.


@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent, RecipeOverviewComponent, RecipeAddComponent, RecipeUpdateComponent],
  imports: [CommonModule, SharedModule, CustomMaterialModule, RouterModule, FormsModule,
     ReactiveFormsModule],
  // exports: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipeModule { }
