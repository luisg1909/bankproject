
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import {ServicesService} from '../../services/services.service';


import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    
    // private MD5: Md5,

    private router:Router,private formBuilder: FormBuilder, private servicio:ServicesService) { }
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
 var newpass="202cb962ac59075b964b07152d234b70"

//  newpass=''+md5.appendStr(this.Password).end();
 newpass=this.Password


    console.log('Email>'+this.Email)
    console.log('Password>'+newpass)
    // console.log('la newpasshashStr->',hash);
    newpass=this.servicio.tomd5(newpass)



    // // this.router.navigate(['/listado']);
     
    // const jsonData={codigo:this.Email,password:this.Password}

    // this.servicio.postLogin(jsonData)

    // console.log('this.Email>999999'+this.Email+'999999')
    // console.log('this.newpass>999999'+newpass+'999999')

 const formData = new FormData();
 formData.append('codigo', this.Email);
 formData.append('password', newpass);


//  formData.append('codigo', 'bases2');
//  formData.append('password', 'abc');
    this.servicio.postForm(formData,'login').subscribe(msg=>{
      console.log('la respuesta->',msg);

    try {
      var a:any=msg
      var message=a.resultado
      console.log('message '+message+'999999')
      if(message=="exito"){
        this.servicio.message('Logueado correctamente','success')
        this.Loguearseyredirigir(a)
      }else   this.servicio.message('credenciales incorrectas','error')
    } catch (error) {
      
    }
      // this.servicio.setearparametros(msg)
      // this.message('Bienvenido!','success')
      // this.router.navigate(['/listado']);
   
      //     formData.append('password', 'abc');
    },err=>{
      this.servicio.message('credenciales incorrectas','error')
    }) 

  }


  Loguearseyredirigir(a){
     localStorage.setItem('user', this.Email);
    // localStorage.setItem('user', this.Email);

 }

  login(){
      this.servicio.navegar('dashboard');

   }
   myForm:FormGroup;  

  

salir(){

  // this.servicio.cerrarsesion()

}
  Logearse(Fcorreo,Fpass){

    // this.router.navigate(['/listado']);
     
    // const jsonData={correo:Fcorreo,password:Fpass}
    // this.servicio.postLogin(jsonData).subscribe(msg=>{
    //   console.log('la respuesta->',msg);
    //   // this.servicio.setearparametros(msg)
    //   // this.message('Bienvenido!','success')
    //   // this.router.navigate(['/listado']);

    // },err=>{
    //   this.servicio.message('credenciales incorrectas','error')
    // }) 
  }




}
