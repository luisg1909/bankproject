import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { LoginComponent } from '../app/login/login.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router,private http: HttpClient) { 
 // override the route reuse strategy
 


  }

  getDataget(id){
   // return this.http.get(this.get_domain()+'/preguntas/'+id)
    return this.http.get(id)

  }


 
  navegar(id){
    // return this.http.get(this.get_domain()+'/preguntas/'+id)
    // this.router.navigate(id);

    this.router.navigate(['/'+id]);

   }
   navegarwithparamas(id,param){
    console.log('navegarwithparamase s->');

   
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
  }
  this.router.onSameUrlNavigation = 'reload';
   


    this.router.navigate(['/'+id], { state: { example: param} });


    // this.router.navigate(['/'+id]);

   

   }


   postLogin(data){

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'userid':'1'
      })
    }
    return this.http.post(this.get_domain()+'/obtener_usuario',data,httpOptions);
  }

  get_domain() { 

    //return "https://learn-287403.uc.r.appspot.com"
    return "http://34.68.221.224"

    
  }

}
