/** 
* @class inicio
* @description clase que contiene los metodos, funcionalidades y estructura de la vista de inicio de la aplicación
* @author Sebastian Mosquera
* @date 2022/11/15
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { NgxSpinnerService } from "ngx-spinner";

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
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
    this.validarScreenWidth();
  }

  /** 
   * @method ObtenerInformacionApi 
   * @description Metodo encargado de consumir el servicio que trae la informacion inicial de la api
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  obtenerIformacionApi(){
    this.spinner.show();
    this.endpoints.getAll().subscribe(
      res => {
        this.spinner.hide();
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  /**
   * @method obtenerPersonajes 
   * @description Metodo encargado de consumir el servicio que trae todos los personajes
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  obtenerPersonajes(){
    this.spinner.show();
    this.endpoints.getPersonajes().subscribe(
      res => {
        this.spinner.hide();
        this.arrayPersonajes = res.results;
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  /**
   * @method validarScreenWidth 
   * @description Metodo encargado de validar el tamaño de la pantalla del dispositivo
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  validarScreenWidth(){
    if(screen.width <= 1024){
      this.movil = true;
    }else{
      this.movil = false
    }
    window.sessionStorage.setItem('movil', String(this.movil));
  }

  /**
   * @method vistaPersonaje 
   * @description Metodo encargado de consumir el servicio que trae el personaje por su id y que redirige a la vista de detalles personajes
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  vistaPersonaje(id:number){
    this.spinner.show();
    this.endpoints.getPersonajeId(id).subscribe(
      res => {
        this.spinner.hide();
        this.router.navigateByUrl('/personaje', {state: {res}});
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  /**
   * @method vistaLocacion 
   * @description Metodo encargado de consumir el servicio que trae la locacion del personake y que redirige a la vista locacion
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  vistaLocacion(url: string){
    this.spinner.show();
    this.endpoints.getLocacion(url).subscribe(
      res => {
        this.spinner.hide();
        this.router.navigateByUrl('/locacion', {state: {res}});
      },
      err => {
        this.spinner.hide();
        console.log(err)
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

}
