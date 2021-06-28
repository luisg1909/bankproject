import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicesService} from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

 
  constructor() { }
  codigo=""
 nombre=""

 password=""
 password2=""

 rol=""
 estado="1"
 fecha=""

 errorpassworda=""
 visiblehide=false
  ngOnInit() {

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear()
    var months = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");  

    var today = curr_date + "-" + months[curr_month] + "-" + curr_year   
    this.fecha  ='' + today
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
