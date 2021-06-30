import { Component, OnInit } from '@angular/core';
import { youtube } from 'googleapis/build/src/apis/youtube';
import {ServicesService} from '../../services/services.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;

constructor(private servicio:ServicesService) { }
meses=[]
banks=[]
body=[]
cargar() {

  // this.servicio.getDataget("datos") .subscribe(data=>{
  //   this.cargar1(data)

  // });

  var data1 = require('./data.json'); // forward slashes will depend on the file location
  this.cargar1(data1)
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

      // console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));

          

           
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

        // console.log('this.meses33 es->',JSON.stringify(this.meses));

      
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
        // console.log('years es->',JSON.stringify(years));

       if(data){
        var name;
        var name1;
        // for (var i = 0; i < data.length; i++)
        var body2=[]

        for (var i = 0; i < data.length ; i++)
        {

          // console.log('data.Bancos[i] e s->',data[i]);
  
          var row=[]
          var row2=[]
          var bank=[]

            // console.log('Anio entro s->');
            
            var nombre = data[i].Nombre;
            row.push(nombre);
            bank.push(nombre);



            var obj = data[i].Anio;
  

            for (var j = 0; j< years.length; j++){


            var mont1 = obj[0][years[j]];
                  // console.log(key + " -> " + p[key]);

             var p= mont1[0];
        
            for (var key in p) {
              if (p.hasOwnProperty(key)) {
                  // console.log(key + " -> " + p[key]);
                  row.push(p[key]);
                  row2.push(p[key]);

              }
          }

        }
        // console.log('row.body es->',row);

        this.body.push(row);
        body2.push(row2);

  
        }   
        console.log('this.body es->',this.body);
        // console.log('body es->',JSON.stringify(this.body));
        // console.log('body2 es->',JSON.stringify(body2));


        var column=[]
        var row2=[]
        var k=0
        for (var j = 0; j< body2.length; j++){
          
          k= body2[j].length;
          }              var row4=[]

          // console.log(' k  es->', k);
          for (var jd = 0; jd< k; jd++){
            column=[]
            for (var jl = 0; jl< body2.length; jl++){
              // console.log('columnkey  es->',JSON.stringify(body2[jl]));

                for (var j = 0; j< body2[jl].length; j++){

                    // console.log(key + " -> " + p[key]);
                   if(j==jd) column.push(body2[jl][ j]);
               
                  }
              }
              // console.log('column  es->',jd,JSON.stringify(column));
              var sorrtedArray:Array<number> = column.sort((n1,n2) => n1 - n2);
              // console.log('column  sorrtedArray->',JSON.stringify(sorrtedArray));


              row2=[]


              for (var j = 0; j< sorrtedArray.length; j++){

            var kvArray = [ 
              { 
                  number:  j,
                  valor: sorrtedArray [ j],
                  column:  jd,

              }


              ]
              row2.push(kvArray);
              // console.log('row2orrtedArray->',JSON.stringify(row2));

              }
              row4.push(row2);

        }

        console.log('row4rray->',JSON.stringify(row4));


   /*      for (var ek = 0; ek< row4.length; ek++){
          // console.log("colrow4 [ek]umn es -> " +row4 [ek]);
          // console.log("colrow4 [ek]umn es -> " +JSON.stringify(row4 [ek]));
          var kJ :any=JSON.stringify(row4 [ek])
             for (var eki = 0; eki< row4 [ek].length; eki++){
              var ff=row4 [ek][eki]
            console.log("colrow4oo [ek]umn es -> " +JSON.stringify(row4 [ek][eki]) );
            console.log("column es -> " +ff[0].column);

            } 
         
            // for (var ek = 0; ek< row4.length; ek++){

            // }
       
      } */
     for (var j = 0; j< this.body.length; j++){

        //    for (var j = 0; j< 1; j++){

          for (var k = 1; k< this.body[j].length; k++){
              var col=k-1
             console.log("this.body[j] valuemonth es CON J,k " +this.body[j][k],j,k);
             var valuemonth=this.body[j][k]
           
             for (var ek = 0; ek< row4.length; ek++){
 
              var kJ :any=JSON.stringify(row4 [ek])
                 for (var eki = 0; eki< row4 [ek].length; eki++){
                  var ff=row4 [ek][eki]
                console.log("colrow4oo [ek]umn es -> " +JSON.stringify(row4 [ek][eki]) );
                console.log("column es -> " +ff[0].column);
                if(col==ff[0].column){
                         
                  if(valuemonth==ff[0].valor){
                        this.body[j][k]=ff[0].number
                         

                  } 
                } 
                } 
              
           
            }
       
          }
         }


         console.log('this.bodyf es->',this.body);



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
