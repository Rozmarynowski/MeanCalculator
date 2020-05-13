import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calcuateWay = ['arytmetyczna', 'geometryczna', 'harmoniczna'];
  selectedWay = 'harmoniczna';
  newValue: number;
  valuesList: Array<number> = [];
  mean = null;
  selectedDecimal = 1;

  data: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  add() {
    this.valuesList.push(+this.newValue);
    console.log(this.valuesList);
    this.newValue = null;
  }

  remove(value: number) {
    const index = this.valuesList.indexOf(value);
    this.valuesList.splice(index, 1);
  }


  meanCalcuate() {
    switch (this.selectedWay) {
      case this.calcuateWay[0]: {
        console.log('Jedyneczka');
        this.mean = this.aritmeticMean().toFixed(this.selectedDecimal);
        break;
      }
      case this.calcuateWay[1]: {
        console.log('Dwójeczka');
        this.mean = this.geometricMean().toFixed(this.selectedDecimal);
        break;
      }
      case this.calcuateWay[2]: {
        console.log('Trójeczka');
        this.mean = this.harmonicMean().toFixed(this.selectedDecimal);
        break;
      }
    }
  }

  radioChangeHandler(event: any) {
    this.selectedWay = event.target.value;
    this.mean = null;
  }

  aritmeticMean(): number {
    const arrSum = this.valuesList.reduce((a, b) => a + b, 0);
    return arrSum / this.valuesList.length;
  }

  geometricMean(): number {
    const arrMultiply = this.valuesList.reduce((a, b) => a * b);
    return Math.pow(arrMultiply, 1 / this.valuesList.length);
  }

  harmonicMean(): number {
    const arrInverseSum = this.valuesList.reduce((a, b) => a + 1 / b, 0);
    console.log(arrInverseSum);
    return this.valuesList.length / arrInverseSum;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 45 || charCode > 57) || charCode === 47) {
      return false;
    }
    return true;
  }

  clearArray() {
    this.valuesList = [];
    this.mean = null;
  }
}
