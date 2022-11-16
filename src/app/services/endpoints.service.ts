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

  //servicio que trae la informacion inicial de la api
  getAll(): Observable<Informacion>{
      let url = this.urlApi;
      return this.http.get<Informacion>(url);
  }

  //servicio que trae todos los personajes
  getPersonajes(): Observable<Personajes>{
      let url = `${this.urlApi}/character`;
      return this.http.get<Personajes>(url);
  }

    //servicio que trae un personaje especifico por su id
    getPersonajeId(id:any){
      let url = `${this.urlApi}/character/${id}`;
      return this.http.get(url);
  }
}

