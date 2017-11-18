import { Component, OnInit } from '@angular/core';
import { CalculatorService, Setup, Result } from '../calculator.service';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss']
})
export class CalculatorViewComponent implements OnInit {
	setup: Setup;
	result: Result[];
	constructor(private _calculatorService: CalculatorService) { }

	ngOnInit() {
		this.setup = this._calculatorService.getSetup();
		this.result = this._calculatorService.getResult();
		this._calculatorService.calculateResult();
	}
	toggleView() {
		this._calculatorService.toglgeSetupView();
	}
	calculateResult() {
		this._calculatorService.calculateResult();
	}
}
