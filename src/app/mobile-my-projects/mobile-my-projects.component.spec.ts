import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMyProjectsComponent } from './mobile-my-projects.component';

describe('MobileMyProjectsComponent', () => {
  let component: MobileMyProjectsComponent;
  let fixture: ComponentFixture<MobileMyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMyProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
