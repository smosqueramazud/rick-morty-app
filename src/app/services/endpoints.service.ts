import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../models/informacion';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { 

  }

  //servicio que trae todos los superheroes
  getAll(): Observable<Informacion>{
      let url = 'https://rickandmortyapi.com/api';
      return this.http.get<Informacion>(url);
  }
}
