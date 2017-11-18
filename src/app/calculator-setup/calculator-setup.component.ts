import { Component, OnInit } from '@angular/core';
import { CalculatorService, Setup} from '../calculator.service';

@Component({
  selector: 'app-calculator-setup',
  templateUrl: './calculator-setup.component.html',
  styleUrls: ['./calculator-setup.component.scss']
})

export class CalculatorSetupComponent implements OnInit {
	setup: Setup;
	  constructor(private _calculatorService: CalculatorService) {
	}

  ngOnInit() {
	  this.setup = this._calculatorService.getSetup();
  }
  toggleView() {
	  this._calculatorService.toglgeSetupView();
    this._calculatorService.calculateResult();
  }
  setType(type: string) {
    this._calculatorService.setType(type);
  }
}
