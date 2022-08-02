import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyTwentyTwoComponent } from './july-twenty-two.component.spec';

describe('JulyTwentyTwoComponent', () => {
  let component: JulyTwentyTwoComponent;
  let fixture: ComponentFixture<JulyTwentyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulyTwentyTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JulyTwentyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
