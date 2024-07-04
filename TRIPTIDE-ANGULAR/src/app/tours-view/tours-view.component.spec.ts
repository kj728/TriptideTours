import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursViewComponent } from './tours-view.component';

describe('ToursViewComponent', () => {
  let component: ToursViewComponent;
  let fixture: ComponentFixture<ToursViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
