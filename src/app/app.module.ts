import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorSetupComponent } from './calculator-setup/calculator-setup.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorSetupComponent,
    CalculatorViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
