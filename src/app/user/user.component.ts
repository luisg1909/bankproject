import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  codigo=""
 nombre=""

 password=""
 password2=""

 rol=""
 estado="0"
 fecha=""

 errorpassworda=""
 visiblehide=false
  ngOnInit() {
   this.codigo= localStorage.getItem('user');
   this.nombre= localStorage.getItem('nombre');
   this.estado= localStorage.getItem('estado');
   this.password= localStorage.getItem('password');
   this.rol= localStorage.getItem('rol');
   this.fecha= localStorage.getItem('fecha');


  }


  Actualizar(){
    console.log('la Actualizar->');
    if(this.password.length==0)  {   
      this.visiblehide=true
      this.errorpassworda="El password debe ir no en blanco"
    return 
    }
    else {   
      this.errorpassworda=""
      this.visiblehide=false
    }

  if(this.password!=this.password2) {   
    this.visiblehide=true
    this.errorpassworda="Las contraseñas no son iguales"
return 
}
  else {   
    this.errorpassworda=""
    this.visiblehide=false
}


if(this.codigo.length==0)  {   
  this.visiblehide=true
  this.errorpassworda="El user debe ir no en blanco"
return 
}
else {   
  this.errorpassworda=""
  this.visiblehide=false
}


if(this.nombre.length==0)  {   
  this.visiblehide=true
  this.errorpassworda="El nombre debe ir no en blanco"
return 
}
else {   
  this.errorpassworda=""
  this.visiblehide=false
}


if(this.estado==null)  {   
  this.visiblehide=true
  this.errorpassworda="Debe seleccionar un estado"
return 
}
else {   
  this.errorpassworda=""
  this.visiblehide=false
}
  console.log('la Actualizar2->');


   }

}
