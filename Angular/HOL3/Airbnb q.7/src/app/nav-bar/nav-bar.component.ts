import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  airbnb = '../../assets/airbnb-logo.png';
  constructor() {}

  ngOnInit(): void {}
}
