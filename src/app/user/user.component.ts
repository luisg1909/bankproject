import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private servicio:ServicesService) { }
  codigo=""
  nombreusuario=""

 password=""
 password2=""

 rol="1"
 estado="0"
 fecharegistro=""

 errorpassworda=""
 visiblehide=false
  ngOnInit() {
    this.  islogged() 
   this.codigo= localStorage.getItem('codigo');
   this.nombreusuario= localStorage.getItem('nombreusuario');
   this.estado= localStorage.getItem('estado');
   this.password= localStorage.getItem('password');
   this.rol= localStorage.getItem('rol');
   this.fecharegistro= localStorage.getItem('fecharegistro');


        
  }
  baja(){const formData = new FormData();
    formData.append('codigo', this.codigo);
    this.servicio.postForm(formData,'eliminar_usuario').subscribe(msg=>{
      console.log('la respuesta->',msg);
      // this.servicio.setearparametros(msg)
       this.servicio.message('Usuario eliminado!','success')
      // this.router.navigate(['/listado']);
      localStorage.clear();     
        // this.servicio.navegarwithparamas2('dashboard',"","0");

      //     formData.append('password', 'abc');
    },err=>{
      this.servicio.message('hubo un error contactando al server','error')
    }) 
    
   }
  islogged() {
    var code= localStorage.getItem('user');
    console.log('la code->',code);

    if(code==null || code.length==0)  {   
      console.log('la code2->',code);

      this.servicio.navegarwithparamas2('dashboard',"","0");

    return 
    }
    console.log('la code3->',code);

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


if(this.nombreusuario.length==0)  {   
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

this.editar()
   

}


   editar(){   
    var newpass=this.servicio.tomd5(this.password)

 const formData = new FormData();
 formData.append('user', this.codigo);
 formData.append('codigo', this.codigo);
 formData.append('password',newpass);
 formData.append('nombre', this.nombreusuario);
 formData.append('estado', this.estado);
 formData.append('fecha', this.fecharegistro);
 formData.append('rol', this.rol);

 this.servicio.postForm(formData,'actualizar_usuario').subscribe(msg=>{
  console.log('la respuesta->',msg);
  // this.servicio.setearparametros(msg)
   this.servicio.message('Usuario actualizado!','success')
  // this.router.navigate(['/listado']);

  //     formData.append('password', 'abc');
},err=>{
  this.servicio.message('hubo un error contactando al server','error')
}) 



  }

}
