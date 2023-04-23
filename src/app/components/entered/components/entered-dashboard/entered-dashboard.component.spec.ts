import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteredDashboardComponent } from './entered-dashboard.component';

describe('EnteredDashboardComponent', () => {
  let component: EnteredDashboardComponent;
  let fixture: ComponentFixture<EnteredDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteredDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnteredDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
