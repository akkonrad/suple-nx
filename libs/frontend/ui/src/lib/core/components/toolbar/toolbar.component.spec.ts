import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { ThemeModule } from '@suple/frontend/ui';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [ThemeModule, RouterTestingModule]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
