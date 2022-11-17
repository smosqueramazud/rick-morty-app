import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLocacionComponent } from './pages/detalle-locacion/detalle-locacion.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'personaje', component: DetallePersonajeComponent},
  {path: 'locacion', component: DetalleLocacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
