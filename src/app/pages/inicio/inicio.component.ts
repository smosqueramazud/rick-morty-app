import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  constructor(private endpoints: EndpointsService) { }

  ngOnInit(): void {
    this.obtenerIformacionApi();
  }

  obtenerIformacionApi(){
    this.endpoints.getAll().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de superhéroes, por favor intenta de nuevo mas tarde`)
      }
    )
  }
}
