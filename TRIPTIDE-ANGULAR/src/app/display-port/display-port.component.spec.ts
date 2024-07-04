import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPortComponent } from './display-port.component';

describe('DisplayPortComponent', () => {
  let component: DisplayPortComponent;
  let fixture: ComponentFixture<DisplayPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
