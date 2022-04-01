import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

import { Ingredient, Mode, Unit } from '@suple/shared/types';
import { BehaviorSubject } from 'rxjs';

interface DropdownOption {
  value: string;
}

@Component({
  selector: 'suple-ingredient-form-control',
  templateUrl: './ingredient-form-control.component.html',
  styleUrls: ['./ingredient-form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IngredientFormControlComponent),
      multi: true
    }
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => IngredientFormControlComponent),
    //   multi: true
    // }
  ]
})
export class IngredientFormControlComponent implements ControlValueAccessor, Validator, OnChanges {

  @Input() mode: Mode = Mode.EDIT;

  @Output() onAddEvent = new EventEmitter<Ingredient>();
  @Output() onEditEvent = new EventEmitter<Ingredient>();
  @Output() onDeleteEvent = new EventEmitter<void>();

  @ViewChild('name') name!: ElementRef;

  Mode = Mode;
  units: DropdownOption[] = [{ value: Unit.G }, { value: Unit.ML }];

  isFormValid$ = new BehaviorSubject(false);
  displayName$ = new BehaviorSubject('');

  editedIngredient: Ingredient = {
    name: '',
    quantity: 0,
    unit: Unit.G
  };

  defaultIngredient?: Ingredient;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onChange = (ingredient: Ingredient) => {
  };

  onTouched = () => {
    console.log('onTouched(:)');
  };

  handleAddClick() {
    // TODO: implement save/cancel/delete
    this.onAddEvent.emit(this.editedIngredient);
  }

  touched = false;
  disabled = false;

  writeValue(value: Ingredient) {
    this.editedIngredient = { ...value };
    this.updateDisplayName();
    this.updateDefaultValue();
  }

  registerOnChange(onChange: (ingredient: Ingredient) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = !disabled;
  }

  handleCancelClick() {
    this.editedIngredient = { ...this.defaultIngredient! };
    this.touched = true;
    this.mode = Mode.READONLY;

  }

  handleSaveClick() {
    // TODO: on save change to view mode
    this.onChange(this.editedIngredient);
    this.updateDisplayName();
    this.mode = Mode.READONLY;
  }

  handleFocus() {
    // TODO: if focus out of all elements and no changes, turn into READONLY mode
    this.mode = Mode.EDIT;
    setTimeout(() => {
      this.name.nativeElement.focus();
    }, 0);
  }

  handleDeleteClick() {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.editedIngredient);
    }
    this.onDeleteEvent.emit();
  }

  handleChange() {
    this.markAsTouched();
    this.updateValidationStatus();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.isFormValid$ ? null : {
      invalidForm: {
        valid: false,
        message: 'ingredientForm fields are invalid'
      }
    };
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  private updateValidationStatus() {
    this.isFormValid$.next(!!this.editedIngredient.name && !!this.editedIngredient.quantity && !!this.editedIngredient.unit);
  }

  private updateDisplayName() {
    this.displayName$.next(`${this.editedIngredient.name}, ${this.editedIngredient.quantity} ${this.editedIngredient.unit}`);
  }

  private updateDefaultValue() {
    if (!this.defaultIngredient) {
      this.defaultIngredient = { ...this.editedIngredient, unit: this.editedIngredient.unit };
    }
  }
}
