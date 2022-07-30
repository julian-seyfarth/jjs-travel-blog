import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyThirtyComponent } from './july-thirty.component';

describe('JulyThirtyComponent', () => {
  let component: JulyThirtyComponent;
  let fixture: ComponentFixture<JulyThirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulyThirtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JulyThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
