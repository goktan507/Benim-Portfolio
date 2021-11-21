import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatePortfolioComponent } from './admin-create-portfolio.component';

describe('AdminCreatePortfolioComponent', () => {
  let component: AdminCreatePortfolioComponent;
  let fixture: ComponentFixture<AdminCreatePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreatePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
