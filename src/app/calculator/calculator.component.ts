import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {
	constructor(private _calculatorService: CalculatorService) { }

	ngOnInit() {
	}

}
