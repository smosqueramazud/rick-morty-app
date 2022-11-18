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

  //Metodo que valida si hay una locacion en la page y asigna la locacion, y redirige al inicio en caso de 
  //data indefinida para controlar errores
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

  //metodo que se ejecuta cuando se oprime el botton del browser
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    sessionStorage.removeItem('locacion');
  }

}
