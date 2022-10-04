import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Property and event Bindings';
  imgURL = 'https://picsum.photos/640/360';

  handleClick() {
    console.log('button clicked');
  }
}
