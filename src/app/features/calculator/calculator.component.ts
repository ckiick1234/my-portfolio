import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  displayValue: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  inputDigit(digit: string): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  inputDecimal(): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = '0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  handleOperator(nextOperator: string): void {
    const inputValue = parseFloat(this.displayValue);

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation();
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
  }

  performCalculation(): number {
    if (this.firstOperand === null || this.operator === null) return parseFloat(this.displayValue);

    const inputValue = parseFloat(this.displayValue);

    switch (this.operator) {
      case '+':
        return this.firstOperand + inputValue;
      case '-':
        return this.firstOperand - inputValue;
      case '*':
        return this.firstOperand * inputValue;
      case '/':
        return this.firstOperand / inputValue;
      default:
        return inputValue;
    }
  }

  clear(): void {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  calculate(): void {
    if (this.firstOperand === null || this.operator === null) return;

    const result = this.performCalculation();
    this.displayValue = String(result);
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}
