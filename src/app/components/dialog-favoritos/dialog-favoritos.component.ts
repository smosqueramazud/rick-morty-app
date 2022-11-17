import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-favoritos',
  templateUrl: './dialog-favoritos.component.html',
  styleUrls: ['./dialog-favoritos.component.scss']
})
export class DialogFavoritosComponent implements OnInit {
  favoritos: any;
  sinFavoritos: any;
  clickFav = false;

  constructor(
    public dialogRef: MatDialogRef<DialogFavoritosComponent>,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.favoritos = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    if(this.favoritos === null || this.favoritos === undefined) {
      this.sinFavoritos = true;
    }else{
      this.sinFavoritos = false;
    }
    console.log(this.favoritos);
    console.log( this.sinFavoritos);
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/inicio');
  }

  favoritoRm(posAraryFav: number){
    let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    arrayFav.splice(posAraryFav,1);
    sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
    this.favoritos = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    this.clickFav = true;
  }

}
