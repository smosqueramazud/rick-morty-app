/** 
* @class dialog-favoritos 
* @description clase que contiene los metodos y funcionalidades del dialog de personajes favoritos
* @author Sebastian Mosquera
* @date 2022/11/15
*/
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
    this.validarFavritos();
  }

  /** 
   * @method onNoClick 
   * @description Metodo que cierra del dialog
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  onNoClick(): void {
    if(this.sinFavoritos || !this.clickFav){
      this.dialogRef.close();
    }else{
      this.dialogRef.close();
      this.router.navigateByUrl('/inicio');
      sessionStorage.removeItem('locacion');
      sessionStorage.removeItem('personaje');
    }
  }

  /** 
   * @method favoritoRm 
   * @description Metodo que quita un personaje como favorito
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  favoritoRm(posAraryFav: number){
    let arrayFav = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    arrayFav.splice(posAraryFav,1);
    sessionStorage.setItem('listaFavoritos', JSON.stringify(arrayFav));
    this.favoritos = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    this.clickFav = true;
  }

  /** 
   * @method validarFavritos 
   * @description Metodo que valida si existen favoritos
   * @author Sebastian Mosquera
   * @date 2022/11/17
   */
  validarFavritos(){
    this.favoritos = JSON.parse(sessionStorage.getItem('listaFavoritos')!);
    if(this.favoritos === null || this.favoritos === undefined) {
      this.sinFavoritos = true;
    }else{
      this.sinFavoritos = false;
    }
  }

}
