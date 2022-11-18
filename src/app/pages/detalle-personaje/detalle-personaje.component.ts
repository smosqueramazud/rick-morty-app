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

  //Metodo que valida si hay un personaje en la page y asigna el personaje, y redirige al inicio en caso de 
  //data indefinida para controlar errores
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

  favoritoAdd(){
    this.fav = true;
    if(sessionStorage.getItem('listaFavoritos') === null){
      let array = [];
      array[0] = this.personaje;
      console.log(array);
      sessionStorage.setItem('listaFavoritos', JSON.stringify(array));
    }else{
      let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
      console.log(arrayFav);
      arrayFav.push(this.personaje);
      console.log(arrayFav);
      sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
    }

  }

  favoritoRm(){
    this.fav = false;
    let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    arrayFav.splice(this.idPersonaje, 1);
    console.log(arrayFav);
    sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
  }

    //metodo que se ejecuta cuando se oprime el botton del browser
    @HostListener('window:popstate', ['$event'])
    onPopState() {
      sessionStorage.removeItem('personaje');
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
