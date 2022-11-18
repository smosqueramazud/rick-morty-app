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

  /** @method ObtenerInformacionApi 
   * @description Metodo en cargado de consumir el servicio que trae la informacion inicial de la api
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  obtenerIformacionApi(){
    this.endpoints.getAll().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
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
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
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
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  vistaLocacion(url: string){
    this.endpoints.getLocacion(url).subscribe(
      res => {
        this.router.navigateByUrl('/locacion', {state: {res}});
      },
      err => {
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

}
