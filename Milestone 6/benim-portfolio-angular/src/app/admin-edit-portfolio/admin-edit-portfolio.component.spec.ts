import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPortfolioComponent } from './admin-edit-portfolio.component';

describe('AdminEditPortfolioComponent', () => {
  let component: AdminEditPortfolioComponent;
  let fixture: ComponentFixture<AdminEditPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
