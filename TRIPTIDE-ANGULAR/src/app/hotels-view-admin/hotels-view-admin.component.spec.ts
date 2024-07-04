import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsViewAdminComponent } from './hotels-view-admin.component';

describe('HotelsViewAdminComponent', () => {
  let component: HotelsViewAdminComponent;
  let fixture: ComponentFixture<HotelsViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsViewAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
