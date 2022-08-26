import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustTwentyFiveComponent } from './august-twenty-five.component';

describe('AugustTwentyFiveComponent', () => {
  let component: AugustTwentyFiveComponent;
  let fixture: ComponentFixture<AugustTwentyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustTwentyFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustTwentyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
