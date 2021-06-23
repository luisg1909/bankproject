import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getDataget(id){
   // return this.http.get(this.get_domain()+'/preguntas/'+id)
    return this.http.get(id)

  }



}
