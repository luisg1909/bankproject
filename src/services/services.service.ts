import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { LoginComponent } from '../app/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router,private http: HttpClient) { }

  getDataget(id){
   // return this.http.get(this.get_domain()+'/preguntas/'+id)
    return this.http.get(id)

  }


  navegar(id){
    // return this.http.get(this.get_domain()+'/preguntas/'+id)
    this.router.navigate(id);
 
   }
 


}
