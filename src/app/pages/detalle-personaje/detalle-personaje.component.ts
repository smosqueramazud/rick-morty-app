/** 
* @class detalle-locacion
* @description clase que contiene los metodos, funcionalidades y estructura de la vista de detalle del personaje
* @author Sebastian Mosquera
* @date 2022/11/15
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  personaje: any;
  fav: boolean;
  idPersonaje = 0;

  constructor(private router: Router,
    private endpoints: EndpointsService,) { 
    this.fav = false;
  }

  ngOnInit(): void {
    this.validarPersonaje();
  }

  /** 
   * @method validarPersonaje 
   * @description Metodo que valida si hay un personaje en la page y asigna el personaje, y redirige al inicio en caso de data indefinida para controlar errores
   * @author Sebastian Mosquera
   * @date 2022/11/18
   */
  validarPersonaje(){
    if(window.history.state.res === undefined && JSON.parse(sessionStorage.getItem('personaje')!) === null){
      this.router.navigateByUrl('/inicio');
    }else{
      if(JSON.parse(sessionStorage.getItem('personaje')!) != null){
        this.personaje = JSON.parse(sessionStorage.getItem('personaje')!);
      }else{
        this.personaje = window.history.state.res
        sessionStorage.setItem('personaje', JSON.stringify(this.personaje));
      }
    }
  }

  /** 
   * @method favoritoAdd 
   * @description Metodo que agrega un personaje como favorito
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  favoritoAdd(){
    this.fav = true;
    if(sessionStorage.getItem('listaFavoritos') === null){
      let array = [];
      array[0] = this.personaje;
      sessionStorage.setItem('listaFavoritos', JSON.stringify(array));
    }else{
      let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
      arrayFav.push(this.personaje);
      sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
    }

  }

  /** 
   * @method favoritoRm 
   * @description Metodo que quita un personaje como favorito
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  favoritoRm(){
    this.fav = false;
    let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    arrayFav.splice(this.idPersonaje, 1);
    console.log(arrayFav);
    sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
  }

  /** 
   * @method onPopState 
   * @description Metodo que se ejecuta cuando se oprime el botton de atras del browser
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
    @HostListener('window:popstate', ['$event'])
    onPopState() {
      sessionStorage.removeItem('personaje');
    }

  /**
   * @method vistaLocacion 
   * @description Metodo encargado de consumir el servicio que trae la locacion del personake y que redirige a la vista locacion
   * @author Sebastian Mosquera
   * @date 2022/11/18
   */
    vistaLocacion(url: string){
      this.endpoints.getLocacion(url).subscribe(
        res => {
          this.router.navigateByUrl('/locacion', {state: {res}});
        },
        err => {
          alert(`Ha ocurrido un error consultando la locación del personaje, por favor intenta de nuevo mas tarde`)
        }
      )
    }
}
