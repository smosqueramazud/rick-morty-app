/** 
* @class header-app
* @description clase que contiene los metodos, funcionalidades y estructura del header de la aplicación
* @author Sebastian Mosquera
* @date 2022/11/15
*/
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {DialogFavoritosComponent} from '../dialog-favoritos/dialog-favoritos.component'

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  movil: any;

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.movil = sessionStorage.getItem('movil');
    console.log(this.movil)
  }

  /** 
   * @method openDialog 
   * @description Metodo que abre el dialog de favoritos
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  openDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      width: '500px'
    };
    const dialogRef = this.dialog.open(DialogFavoritosComponent, dialogConfig);
  }

  /** 
   * @method goInicio 
   * @description Metodo que regresa al inicio y limpia la variable locacion y personaje del storage
   * @author Sebastian Mosquera
   * @date 2022/11/18
   */
  goInicio(){
    this.router.navigateByUrl('/inicio');
    sessionStorage.removeItem('locacion');
    sessionStorage.removeItem('personaje');
  }

  /** 
   * @method openDocumentacion 
   * @description Metodo que abre la documentacion de la api en una pestaña del browser
   * @author Sebastian Mosquera
   * @date 2022/11/18
   */
  openDocumentacion(){
    window.open('https://rickandmortyapi.com/documentation/');
  }
}
