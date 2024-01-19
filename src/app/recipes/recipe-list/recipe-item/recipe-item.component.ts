import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Output() selectedRecipe = new EventEmitter<void>();
  @Input() recipe: Recipe;

  onRecipeSelected() {
    this.selectedRecipe.emit();
  }
}
