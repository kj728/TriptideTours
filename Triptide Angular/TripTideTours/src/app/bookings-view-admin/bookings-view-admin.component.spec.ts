import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewAdminComponent } from './bookings-view-admin.component';

describe('BookingsViewAdminComponent', () => {
  let component: BookingsViewAdminComponent;
  let fixture: ComponentFixture<BookingsViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsViewAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
