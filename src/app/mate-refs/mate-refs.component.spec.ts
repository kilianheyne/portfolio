import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateRefsComponent } from './mate-refs.component';

describe('MateRefsComponent', () => {
  let component: MateRefsComponent;
  let fixture: ComponentFixture<MateRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateRefsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
