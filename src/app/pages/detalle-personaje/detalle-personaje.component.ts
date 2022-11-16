import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  personaje: any;

  constructor() { }

  ngOnInit(): void {
    this.personaje = window.history.state.res
    console.log(this.personaje);
  }

}
