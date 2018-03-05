import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  startvalue: number;
  height: number;
  result: string;

  calculate(): void {
    let text: string = '';
    let value: number = this.startvalue;
    let currentheight: number = 2;
    text += `<table>`;
    while (currentheight <= this.height) {
      text += `<tr><td class="right-align">`;
      text += value;
      text += `</td><td>*</td><td>`;
      text += currentheight;
      text += `</td><td>=</td><td>`;
      value *= currentheight;
      text += value;
      text += `</td></tr>`;
      currentheight++;
    }
    currentheight = 2;
    while (currentheight <= this.height) {
      text += `<tr><td class="right-align">`;
      text += value;
      text += `</td><td>/</td><td>`;
      text += currentheight;
      text += `</td><td>=</td><td>`;
      value /= currentheight;
      text += value;
      text += `</td></tr>`;
      currentheight++;
    }
    text += `</table>`;
    this.result = text;
  }
}
