import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h5>You are in danger</h5>`,
  styles: [`
    h5{
    padding:20px;
    border-bottom:1px solid red;
    background-color:pink;
  }`]
})
export class WarningAlertComponent {

}
