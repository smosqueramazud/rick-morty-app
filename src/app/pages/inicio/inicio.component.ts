import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  movil = false;

  constructor(private endpoints: EndpointsService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
    this.validarScreenWidth();
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

  obtenerPersonajes(){
    this.endpoints.getPersonajes().subscribe(
      res => {
        console.log(res.results);
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de superhéroes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  validarScreenWidth(){
    if(screen.width <= 1024){
      this.movil = true;
    }else{
      this.movil = false
    }
    window.sessionStorage.setItem('movil', String(this.movil));
  }

}
