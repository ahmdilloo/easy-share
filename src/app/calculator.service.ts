import { Injectable } from '@angular/core';

const billTypes = {
	water: {
		rule: "perUnit"
	},
	gas: {
		rule: "perPerson"
	},
	charge: {
		rule: "perUnit"
	}
}

export interface Setup {
	units: number,
	price: number,
	type: string,
	complete: boolean,
	text: string
}

export interface Result {
	unitNo: number,
	persons: number,
	payAmount: number
};
/* rules*/
interface perPersonSetting {
	price: number,
	totalPersons: number,
	unitPersons: number
};

interface perUnitSetting {
	price: number,
	units: number
};

const rules = {
	perPerson: function(config: perPersonSetting) {
		console.log('pp', config);
		const personShare = (config.price / config.totalPersons);
		const unitShare = config.unitPersons * personShare;
		return unitShare;
	},
	perUnit: function(config: perUnitSetting) {
		console.log('pu', config);
		const unitShare = (config.price / config.units);
		return unitShare;
	}
}

const DEFAULT_UNIT_PERSONS = 1;

@Injectable()
export class CalculatorService {
	setup: Setup = {
		units: 5,
		price: 10000,
		type: 'water',
		complete: false,
		text: "جدول مبلغ پرداختی برای هر واحد"
	}
	rulesCalculatorSetting = {
		perPerson: this.makePerPersonCalculatorSetting,
		perUnit: this.makePerUnitCalculatorSetting
	};
	result: Result[] = [];
	constructor() { }
	getSetup(): Setup {
		return this.setup;
	}
	getResult(): Result[] {
	  return this.result;
	}
	setType(type: string) {
		this.setup.type = type;
	}
	toglgeSetupView() {
		this.setup.complete = !this.setup.complete;
	}
	//
	updateUnitPerson(unit: number, persons: number) {
		const hasPermission = !isNaN(persons);
		if (hasPermission) {
			this.result[unit].persons = persons;
			this.calculateResult();
		}
	}
	calculateResult() {
		for (let counter = 0; counter < this.setup.units; counter ++) {
			const newResult: Result = this.result[counter] || this.makeDetaultResultItem();
			// set unit number
			newResult.unitNo = counter;
			// set persons for each unit
			const isFirstResultSet = counter in this.result;
			const persons = newResult.persons;
			newResult.persons = persons;
			// rule for price calculation
			const rule = this.getRule();
			const config = this.rulesCalculatorSetting[rule](this.setup, this.result, counter);
			const payAmount = rules[rule](config);
			newResult.payAmount = payAmount;
			//
			this.result[counter] = newResult;
		}
	  console.log(this.result);
	}
	getRule(): string {
		return billTypes[this.setup.type].rule;
	}
	makePerPersonCalculatorSetting(setup: Setup, result: Result[], unitNo: number): perPersonSetting {
		const totalPersons = result.reduce((counter, item) => counter += item.persons, 0);
		const unitPersons = result[unitNo].persons;
		return {
			price: setup.price,
			totalPersons,
			unitPersons
		};
	}
	makePerUnitCalculatorSetting(setup: Setup): perUnitSetting {
		return {
			units: setup.units,
			price: setup.price
		};
	}
	makeDetaultResultItem(): Result {
	  return {
		unitNo: 0,
		persons: DEFAULT_UNIT_PERSONS,
		payAmount: 0
	  }
	}
}
