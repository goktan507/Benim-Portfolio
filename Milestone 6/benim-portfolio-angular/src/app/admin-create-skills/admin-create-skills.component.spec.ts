import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSkillsComponent } from './admin-create-skills.component';

describe('AdminCreateSkillsComponent', () => {
  let component: AdminCreateSkillsComponent;
  let fixture: ComponentFixture<AdminCreateSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
