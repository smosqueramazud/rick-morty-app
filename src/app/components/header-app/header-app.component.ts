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

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      width: '500px'
    };
    const dialogRef = this.dialog.open(DialogFavoritosComponent, dialogConfig);
  }

  //metodo que regresa al inicio y limpia la variable locaion y personaje
  goInicio(){
    this.router.navigateByUrl('/inicio');
    sessionStorage.removeItem('locacion');
    sessionStorage.removeItem('personaje');
  }

  openDocumentacion(){
    window.open('https://rickandmortyapi.com/documentation/');
  }
}
