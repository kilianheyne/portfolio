import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProjectsComponent } from './mobile-projects.component';

describe('MobileProjectsComponent', () => {
  let component: MobileProjectsComponent;
  let fixture: ComponentFixture<MobileProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
