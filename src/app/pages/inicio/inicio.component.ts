import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  movil = false;
  arrayPersonajes: any;
  displayedColumns: string[] = ['imagen', 'nombre', 'estado', 'especie', 'ultima locacion', 'ultimo episodio', 'modificar'];

  constructor(private endpoints: EndpointsService,
    private router: Router) { }

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
        this.arrayPersonajes = res.results;
        console.log(this.arrayPersonajes);
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

  vistaPersonaje(id:number){

    this.endpoints.getPersonajeId(id).subscribe(
      res => {
        this.router.navigateByUrl('/personaje', {state: {res}});
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de superhéroes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  vistaLocacion(url: string){
    console.log(url);
    this.endpoints.getLocacion(url).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de superhéroes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

}
