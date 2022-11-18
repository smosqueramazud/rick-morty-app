/** 
* @class endpoints 
* @description clase que contiene los endpoints de la api donde se consumen los recursos de cada uno de ellos
* @author Sebastian Mosquera
* @date 2022/11/15
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../models/informacion';
import { Personajes } from '../models/personajes';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  urlApi = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { 

  }

  /** 
   * @method getAll 
   * @description Metodo encargado de crear la peticion al endpoint que trae la informacion inicial de la api
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  getAll(): Observable<Informacion>{
      let url = this.urlApi;
      return this.http.get<Informacion>(url);
  }

  /** 
   * @method getPersonajes 
   * @description Metodo encargado de crear la peticion al endpoint que trae todos los personajes
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  getPersonajes(): Observable<Personajes>{
      let url = `${this.urlApi}/character`;
      return this.http.get<Personajes>(url);
  }

  /** 
   * @method getPersonajeId 
   * @description Metodo encargado de crear la peticion al endpoint que trae un personaje por su id
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  getPersonajeId(id:any){
      let url = `${this.urlApi}/character/${id}`;
      return this.http.get(url);
  }

  /** 
   * @method getPersonajeId 
   * @description Metodo encargado de crear la peticion al endpoint que trae la locacion del personaje
   * @author Sebastian Mosquera
   * @date 2022/11/15
   */
  getLocacion(link:any){
      let url = link;
      return this.http.get(url);
  }
}

