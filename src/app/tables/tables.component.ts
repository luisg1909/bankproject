import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor(private servicio:ServicesService) { }

  cargar() {
  this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
        
   
    console.log('la data es->',data);
    console.log('la data es->',JSON.stringify(data));

      
          })
        }

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

  ngOnInit() {
    this.cargar() 
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

}
