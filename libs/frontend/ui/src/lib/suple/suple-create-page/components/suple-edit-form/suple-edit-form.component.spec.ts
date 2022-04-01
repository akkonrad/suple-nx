import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupleEditFormComponent } from './suple-edit-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '@suple/frontend/ui';

describe('EditFormComponent', () => {
  let component: SupleEditFormComponent;
  let fixture: ComponentFixture<SupleEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupleEditFormComponent],
      imports: [FormsModule, ReactiveFormsModule, ThemeModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupleEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form validity', () => {
    expect(component.form.valid).toBeFalsy();
    const formValue = {
      'name': 'name',
      'description': 'description',
      'ingredients': [
        {
          'name': 'ingredient',
          'quantity': 99,
          'unit': {
            'value': 'g'
          }
        }
      ]
    };
    component.form.setValue(formValue);
    expect(component.form.valid).toBeTruthy();
  });

  describe('ingredients validation', () => {
    it('cant submit with no ingredient', () => {
      expect(component.form.valid).toBeFalsy();
      const formValue = {
        'name': 'name',
        'description': 'description',
        'ingredients': []
      };
      component.form.setValue(formValue);
      expect(component.form.valid).toBeFalsy();
    });
    it('sum of ingredients cannot be greater than 100', () => {
      expect(component.form.valid).toBeFalsy();
      const formValue = {
        'name': 'name',
        'description': 'description',
        'ingredients': [
          {
            'name': 'ingredient1',
            'quantity': 90,
            'unit': {
              'value': 'g'
            }
          },
          {
            'name': 'ingredient2',
            'quantity': 99,
            'unit': {
              'value': 'g'
            }
          }
        ]
      };
      component.form.setValue(formValue);
      expect(component.form.valid).toBeFalsy();
    });
    it('all ingredients must have the same unit', () => {
      expect(component.form.valid).toBeFalsy();
      const formValue = {
        'name': 'name',
        'description': 'description',
        'ingredients': [
          {
            'name': 'ingredient1',
            'quantity': 10,
            'unit': {
              'value': 'g'
            }
          },
          {
            'name': 'ingredient2',
            'quantity': 10,
            'unit': {
              'value': 'ml'
            }
          }
        ]
      };
      component.form.setValue(formValue);
      expect(component.form.valid).toBeFalsy();
    });
  });

});
