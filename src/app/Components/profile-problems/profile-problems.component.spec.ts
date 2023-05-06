import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProblemsComponent } from './profile-problems.component';

describe('ProfileProblemsComponent', () => {
  let component: ProfileProblemsComponent;
  let fixture: ComponentFixture<ProfileProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
