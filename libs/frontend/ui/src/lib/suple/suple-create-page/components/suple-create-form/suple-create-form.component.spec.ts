import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupleCreateFormComponent } from './suple-create-form.component';

describe('CreateFormComponent', () => {
  let component: SupleCreateFormComponent;
  let fixture: ComponentFixture<SupleCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupleCreateFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name is required', () => {
    expect(false).toBeTruthy();
  });

  it('description is required', () => {
    expect(false).toBeTruthy();
  });

  describe('ingredients', () => {
    it('at least one ingredient is required', () => {
      expect(false).toBeTruthy();
    });
    it('sum of ingredients cannot be greater than 100', () => {
      expect(false).toBeTruthy();
    });
    it('all ingredients must have the same unit', () => {
      expect(false).toBeTruthy();
    });
  });

});
