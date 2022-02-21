import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupleCreateFormComponent } from './suple-create-form.component';

describe('CreateFormComponent', () => {
  let component: SupleCreateFormComponent;
  let fixture: ComponentFixture<SupleCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupleCreateFormComponent ]
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
});
