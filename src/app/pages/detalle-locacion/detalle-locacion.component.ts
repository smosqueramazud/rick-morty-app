import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-locacion',
  templateUrl: './detalle-locacion.component.html',
  styleUrls: ['./detalle-locacion.component.scss']
})
export class DetalleLocacionComponent implements OnInit {

  locacion: any;

  constructor() { }

  ngOnInit(): void {
    this.locacion = window.history.state.res
    console.log(this.locacion)
  }

}
