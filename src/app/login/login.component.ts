
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {ServicesService} from '../../services/services.service';


import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formBuilder: FormBuilder, private servicio:ServicesService) { }
  Email=""
  Password=""

  ngOnInit() {

        // cuerpopregunta: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(2000)]]

        this.myForm = new FormGroup({          
          'name':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
          'email':new FormControl(null,Validators.email)

     })
      }




      Loguearse() {

    console.log('Email>'+this.Email)
    console.log('Password>'+this.Password)

    // this.router.navigate(['/listado']);
     
    const jsonData={correo:this.Email,password:this.Password}
    this.servicio.postLogin(jsonData).subscribe(msg=>{
      console.log('la respuesta->',msg);
      // this.servicio.setearparametros(msg)
      // this.message('Bienvenido!','success')
      // this.router.navigate(['/listado']);

    },err=>{
      this.message('credenciales incorrectas','error')
    }) 

  }


  login(){
      this.servicio.navegar('dashboard');

   }
   myForm:FormGroup;  

  

salir(){

  // this.servicio.cerrarsesion()

}
  Logearse(Fcorreo,Fpass){

    this.router.navigate(['/listado']);
     
    const jsonData={correo:Fcorreo,password:Fpass}
    this.servicio.postLogin(jsonData).subscribe(msg=>{
      console.log('la respuesta->',msg);
      // this.servicio.setearparametros(msg)
      // this.message('Bienvenido!','success')
      // this.router.navigate(['/listado']);

    },err=>{
      this.message('credenciales incorrectas','error')
    }) 
  }

  message(a,type) {
 

    Swal.fire({
      title: 'Mensaje!',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }


}
