import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupleListPageComponent } from './suple-list-page.component';

describe('ListViewComponent', () => {
  let component: SupleListPageComponent;
  let fixture: ComponentFixture<SupleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupleListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
