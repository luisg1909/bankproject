import { Component, OnInit } from '@angular/core';
import { youtube } from 'googleapis/build/src/apis/youtube';
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
  meses=[]
  banks=[]
  body=[]
  cargar() {

    this.servicio.getDataget("datos") .subscribe(data=>{
      this.cargar1(data)

    });
    
    // var data1 = require('./data_bancos.json'); // forward slashes will depend on the file location

    // this.cargar1(data1)
  }
  cargar1(data1) {

  // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
    //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
      
    var v=0

    var k=0
    var m=0
		// var data =  JSON.parse(localStorage.getItem('ram')); 
 	//   console.log('la data7 es->',data);
   	// console.log('la data7 es->',JSON.stringify(data));
     var data = data1.Bancos;
    
     if(data){
      var years=[]

      this.meses.push("Perfil Financiero");

      var name;
      var name1;
      for (var i = 0; i < data.length; i++)
      {
  
        
      
          var obj = data[i].Anio;

          // console.log('obj es->',obj);
          // console.log('mont1 es->',mont1);
          // console.log('mont2 es->',mont1[0]);
          var f  =obj[0]
          if(v==0){
          for (var key in f) {
            if (f.hasOwnProperty(key)) {
                console.log(key + " -> ESTE ES EL MES" );
                years.push(key);
                ++v;
            }
        }

     

         }
        }

        console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));

            
  
             
          for (var j = 0; j < 1;j++)
          {
            obj = data[j].Anio;
              for (var i = 0; i < years.length; i++){

                  var mont1 = obj[0][years[i]];
  
                  for (name in mont1[0]) {
      
                    // console.log('mont2 es->',name);
                        this.meses.push(name);
                    }
  
              }
  
  
        } 

          console.log('this.meses33 es->',JSON.stringify(this.meses));

        
        //   for (var j = 0; j < 1;j++)
        //   {
        //     obj = data[j].Anio;
        //       for (var i = 0; i < years.length; i++){

        //           var mont1 = obj[0][years[i]];
  
        //           for (name in mont1[0]) {
      
        //             // console.log('mont2 es->',name);
        //                 this.meses.push(name);
        //             }
  
        //       }
  
  
        // } 


  
   
    }
        //   set data banks

         k=0
         m=0  
          console.log('years es->',JSON.stringify(years));

         if(data){
          var name;
          var name1;
          // for (var i = 0; i < data.length; i++)

          for (var i = 0; i < data.length ; i++)
          {

            // console.log('data.Bancos[i] e s->',data[i]);
    
            var row=[]

              // console.log('Anio entro s->');
              
              var nombre = data[i].Nombre;
              row.push(nombre);



              var obj = data[i].Anio;
    

              for (var j = 0; j< years.length; j++){


              var mont1 = obj[0][years[j]];
                    // console.log(key + " -> " + p[key]);

               var p= mont1[0];
          
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    // console.log(key + " -> " + p[key]);
                    row.push(p[key]);

                }
            }

          }
          console.log('row.body es->',row);

          this.body.push(row);

    
          }   
          console.log('this.body es->',this.body);
          console.log('body es->',JSON.stringify(this.body));
    
        }

   }
   islogged() {
    var code= localStorage.getItem('user');
    console.log('la code->',code);

    if(code==null || code.length==0)  {   
      this.servicio.navegarwithparamas2('dashboard',"","0");

    return 
    }
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
    this.  islogged()
    this.cargar() 
      this.tableData1 = {
          headerRow:this.meses,
          dataRows:this.body
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
