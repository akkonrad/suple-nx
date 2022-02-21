import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupleCreatePageComponent } from './suple-create-page.component';

describe('CreateFormViewComponent', () => {
  let component: SupleCreatePageComponent;
  let fixture: ComponentFixture<SupleCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupleCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupleCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
