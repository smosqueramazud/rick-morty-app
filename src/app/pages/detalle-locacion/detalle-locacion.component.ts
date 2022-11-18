/** 
* @class detalle-locacion
* @description clase que contiene los metodos, funcionalidades y estructura de la vista de la locacion del personaje
* @author Sebastian Mosquera
* @date 2022/11/15
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-detalle-locacion',
  templateUrl: './detalle-locacion.component.html',
  styleUrls: ['./detalle-locacion.component.scss']
})

export class DetalleLocacionComponent implements OnInit {

  locacion: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.validarLocacion();
  }

  /** 
   * @method validarLocacion 
   * @description Metodo que valida si hay una locacion en la page y asigna la locacion, y redirige al inicio en caso de data indefinida para controlar errores
   * @author Sebastian Mosquera
   * @date 2022/11/18
   */
  validarLocacion(){
    if(window.history.state.res === undefined && JSON.parse(sessionStorage.getItem('locacion')!) === null){
      this.router.navigateByUrl('/inicio');
    }else{
      if(JSON.parse(sessionStorage.getItem('locacion')!) != null){
        this.locacion = JSON.parse(sessionStorage.getItem('locacion')!);
      }else{
        this.locacion = window.history.state.res
        sessionStorage.setItem('locacion', JSON.stringify(this.locacion));
      }
    }
  }

  /** 
   * @method onPopState 
   * @description Metodo que se ejecuta cuando se oprime el botton de atras del browser
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    sessionStorage.removeItem('locacion');
  }

}
