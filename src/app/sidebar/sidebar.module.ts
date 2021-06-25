import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {ServicesService} from '../../services/services.service';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {

    constructor(private servicio:ServicesService) { }

    Loguearse(){

        this.servicio.navegar('login');
    /*     
        const jsonData={correo:Fcorreo,password:Fpass}
        this.servicio.postLogin(jsonData).subscribe(msg=>{
          console.log('la respuesta->',msg);
          this.servicio.setearparametros(msg)
          this.message('Bienvenido!','success')
          this.router.navigate(['/listado']);
    
        },err=>{
          this.message('credenciales incorrectas','error')
        }) */
}




}
