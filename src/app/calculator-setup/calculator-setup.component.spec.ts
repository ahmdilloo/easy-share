import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSetupComponent } from './calculator-setup.component';

describe('CalculatorSetupComponent', () => {
  let component: CalculatorSetupComponent;
  let fixture: ComponentFixture<CalculatorSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
