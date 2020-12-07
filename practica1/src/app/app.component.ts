import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';

  points = 1;

  Plus(): void {
    this.points ++;
  }

  Reset(): void {
    this.points = 0;
  }

}
