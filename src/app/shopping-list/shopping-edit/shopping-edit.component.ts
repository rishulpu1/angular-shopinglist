import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('ingInput', { static: false }) ingInputRef: ElementRef;
  @ViewChild('ingAmount', { static: false }) ingAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIng() {
    const ingName = this.ingInputRef.nativeElement.value;
    const ingAmount = this.ingAmountRef.nativeElement.value;
    const newIgredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIgredient);
  }
}
