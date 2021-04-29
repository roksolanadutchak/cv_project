import { Component, OnInit } from '@angular/core';
const itemImageUrl = '../assets/roks.jpg';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemImageUrl = '../assets/roks.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
