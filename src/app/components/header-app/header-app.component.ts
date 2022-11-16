import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  movil: any;

  constructor() { }

  ngOnInit(): void {
    this.movil = sessionStorage.getItem('movil');
    console.log(this.movil)
  }

}
