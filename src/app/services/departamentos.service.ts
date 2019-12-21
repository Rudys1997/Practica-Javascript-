import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departemento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
   
  constructor(private http:HttpClient) { 

  }
 public GetDepartamentos():Observable<Departamento>{

  return this.http.get<Departamento>(`${environment.link}/departamentos`)

 }

}
