import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //this is an string array
})
export class AppComponent {
  title = 'Test AngularJS 2 App';

  nghia = {
    "id": 1,
    "name": "nghia",
    "desciption": "this is description",
    "money": 25000
  };

  make() {
    this.nghia.money++;
  }
}
