import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustSixComponent } from './august-six.component';

describe('AugustSixComponent', () => {
  let component: AugustSixComponent;
  let fixture: ComponentFixture<AugustSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
