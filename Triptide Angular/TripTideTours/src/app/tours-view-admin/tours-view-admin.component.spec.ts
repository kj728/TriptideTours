import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursViewAdminComponent } from './tours-view-admin.component';

describe('ToursViewAdminComponent', () => {
  let component: ToursViewAdminComponent;
  let fixture: ComponentFixture<ToursViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursViewAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
