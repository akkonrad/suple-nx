import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientFormControlComponent } from './ingredient-form-control.component';

describe('IngredientFormControlComponent', () => {
  let component: IngredientFormControlComponent;
  let fixture: ComponentFixture<IngredientFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientFormControlComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handling mode', () => {

    describe('READONLY', () => {

      // inputs
      it('one input visible', () => {
        expect(false).toBeTruthy();
      });

      // actions
      it('check visible buttons', () => {
        // add
        // save
        // delete
        // cancel
      });

      // outputs
      it('delete button click triggers output call', () => {
        expect(false).toBeTruthy();
      });
    });

    describe('EDIT', () => {
      // inputs
      it('three inputs visible', () => {
        expect(false).toBeTruthy();
      });

      it('check visible buttons', () => {
        // add
        // save
        // delete
        // cancel
      });

      // outputs
      it('cancel button does not trigger any output', () => {
        expect(false).toBeTruthy();
      });

      it('save button triggers save output call', () => {
        expect(false).toBeTruthy();
      });
    });

    describe('NEW', () => {
      it('three inputs visible', () => {
        expect(false).toBeTruthy();
      });

      it('check visible buttons', () => {
        // add
        // save
        // delete
        // cancel
      });

      it('add button click triggers output call', () => {
        expect(false).toBeTruthy();
      });
    });


  });


});
