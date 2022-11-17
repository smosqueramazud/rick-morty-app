import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogFavoritosComponent} from '../dialog-favoritos/dialog-favoritos.component'

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  movil: any;

  constructor(public dialog: MatDialog) { }

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
}
