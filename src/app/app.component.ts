import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-map';

  time: string;
  date: string;
  constructor() {
    setInterval(() => {
      this.time = new Date().toString().split(' ')[4];
      this.date = new Date().toString().split(' ')[2] + " " +
      new Date().toString().split(' ')[1] + " " +
      new Date().toString().split(' ')[3];
    }, 1);
  }
}

