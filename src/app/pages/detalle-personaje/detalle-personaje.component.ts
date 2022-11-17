import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  personaje: any;
  fav: boolean;
  idPersonaje = 0;

  constructor(private router: Router) { 
    this.fav = false;
  }

  ngOnInit(): void {
    
    if(window.history.state.res === undefined){
      this.router.navigateByUrl('/inicio');
    }else{
      this.personaje = window.history.state.res
    }
    console.log(this.personaje);
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
}
