import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {ServicesService} from '../../services/services.service';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb: FormBuilder, private servicio:ServicesService) { }

  ngOnInit() {

        // cuerpopregunta: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(2000)]]

        this.loginform = this.fb.group({
  
          emailFormControl: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
          passFormControl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]]
    
        });
    
       this.salir()
  }


  entrar() {

    console.log('el mail es->',
    this.loginform.controls['emailFormControl'].value);
    console.log('el passFormControl es->',
    this.loginform.controls['passFormControl'].value);


    let name=this.loginform.controls['emailFormControl'].value
    let passform=this.loginform.controls['passFormControl'].value
    var esvalido=false

    try {
       esvalido=this.Login_test(name,passform)
       this.Loguearse(name,passform);

      }
     catch(e) {
         console.log(e); 
    }
if (esvalido)this.login()
// else  this.servicio.message("ocurrio un error al validar datos , revise usuario o correo ","error")



  }
  matcher = new MyErrorStateMatcher();


  login(){

   }
  loginform: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]);
  passFormControl = new FormControl('', [
    Validators.required
  ]);


  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  

  Login_test(usuario,password) {
    if(!usuario || ! password)    throw new Error('fallo registro')

    if(usuario.length<1 || password.length<4)    throw new Error('fallo registro')

  //  }


   if(!this.validateEmail(usuario)){
    throw new Error('fallo registro')
    }  

   return true

  }
  validodatos
  Login_test_2(a:any,b:any){
    return true
  }
salir(){

  this.servicio.cerrarsesion()

}
  Loguearse(Fcorreo,Fpass){
    const jsonData={correo:Fcorreo,password:Fpass}
    this.servicio.postLogin(jsonData).subscribe(msg=>{
      console.log('la respuesta->',msg);
      this.servicio.setearparametros(msg)
      this.message('Bienvenido!','success')
      this.router.navigate(['/listado']);

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
