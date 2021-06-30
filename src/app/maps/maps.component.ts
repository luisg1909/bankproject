import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicesService} from '../../services/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
 

 
  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];
  param1: string;
  titulo=" en rango de Abril a Mayo"
  selectedbank=" "
  constructor(private router:Router,private route: ActivatedRoute, private servicio:ServicesService) { 
    this.param1 = this.route.snapshot.params.param1;
    const navigation = this.router.getCurrentNavigation();

    const state = navigation.extras.state as {
      example: string
    };
   console.log( "state es "+state );

  //  this.route.params.subscribe(params => {
  //     // var id = +params['id']; // (+) converts string 'id' to a number
  //     console.log( "params es "+JSON.stringify(params));

  //     // In a real app: dispatch action to load the details here.
  //  });
  // if(state!=undefined) 


  try {
    console.log( "param1 es"+state.example );
    this.cargar(state.example) ;

   }
   catch (error) {
    this.cargar(0) ;
    console.log('this.body es->',this.body);

    this.hoursChartLegendItems = [
      { title: this.banks[0], imageClass: 'fa fa-circle text-info' },
      { title:  this.banks[1], imageClass: 'fa fa-circle text-danger' },
      { title:  this.banks[3], imageClass: 'fa fa-circle text-warning' },
      { title:  this.banks[4], imageClass: 'fa fa-circle text-primary ' },
      { title:  this.banks[5], imageClass: 'fa fa-circle text-success' },
      { title: this.banks[6], imageClass: 'fa fa-circle text-primary ' },
      { title:  this.banks[7], imageClass: 'fa fa-circle text-secondary' },
      { title:  this.banks[8], imageClass: 'fa fa-circle text-danger' },
      { title:  this.banks[9], imageClass: 'fa fa-circle text-dark' },
      { title:  this.banks[10], imageClass: 'fa fa-circle text-danger' },
      { title: this.banks[11], imageClass: 'fa fa-circle text-info' },
      { title:  this.banks[12], imageClass: 'fa fa-circle text-danger' },
      { title:  this.banks[13], imageClass: 'fa fa-circle text-primary' },
      { title:  this.banks[14], imageClass: 'fa fa-circle text-primary' },
      { title:  this.banks[15], imageClass: 'fa fa-circle text-primary' },
      { title: this.banks[16], imageClass: 'fa fa-circle text-dark' },
      { title:  this.banks[17], imageClass: 'fa fa-circle text-dark' }
  
    ];
   }

   this.  vergrafico()

  }


  islogged() {
    var code= localStorage.getItem('user');
    console.log('la code->',code);

    if(code==null || code.length==0)  {   
      this.servicio.navegarwithparamas2('dashboard',"","0");

    return 
    }
   }
  Graficar(){
    console.log(' selectedbank es->',this.selectedbank);
    this.servicio.navegarwithparamas('promedio',this.selectedbank);

// this.  changedvalue()
//     console.log(' selectedbank es->',this.selectedbank);
   
//     var y=false
//     if ("Todos los Bancos"==this.selectedbank) {
//       y=true
//     }
//      this.reloadgraficos(y)


//     this.hoursChartLegendItems = [
//       { title: this.selectedbank, imageClass: 'fa fa-circle text-info' },
     
//     ];

//     this.hoursChartData = {
//       labels: this.meses,
//       series:  this.body
//     };
  

    // this.  vergrafico()

   }


  changedvalue()
  {
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  // }
  // this.router.onSameUrlNavigation = 'reload';
   

    


   }

   reloadgraficos(y){

    this.body=[];
    var data= this.datageneral
    var years=this.yearsl

    for (var i = 0; i < data.length ; i++)
    {

      //  console.log('data.Bancos[i] e s->',data[i]);

      var row=[]

        // console.log('Anio entro s->');
        
        var nombre = data[i].Nombre;
        // row.push(nombre);

      

        var obj = data[i].Anio;


        for (var j = 0; j< years.length; j++){


          var mont1 = obj[0][years[j]];
                // console.log(key + " -> " + p[key]);

          var p= mont1[0];
    
          for (var key in p) {
            if (p.hasOwnProperty(key)) {
                // console.log(key + " -> " + p[key]);
                // var numberValue = Number(this.selectedbank);

                 row.push(p[key]);

            }
          }

         }

         if (nombre==this.selectedbank && y==false) {
          console.log( "ombre==this.selectedbank && y==false con nombre"+nombre );
          this.body.push(row);

      } 
         else if(y==true) {
          console.log( "y==true" +nombre );

          this.body.push(row);

      }  
        

    }   
     console.log('this.body es->',this.body);
    // console.log('body es->',JSON.stringify(this.body));

  
   }


  datageneral=[]
  yearsl=[]
  cargar(nameselected) {

    // this.servicio.getDataget("datos") .subscribe(data=>{
    //   this.cargar1(nameselected,data)

    // });

    var data1 = require('./data.json'); // forward slashes will depend on the file location
    this.cargar1(nameselected,data1)
  }
  visiblehide=false
  cargar1(nameselected,data1) {
    var indexselected = Number(nameselected);
    var nemselected=  "Todos los Bancos"

    // this.servicio.getDataget("https://reqres.in/api/users?page=2") .subscribe(data=>{
      //  this.servicio.getDataget("http://34.68.221.224/Reporte/datos") .subscribe(data=>{
        
      var v=0
  
      var k=0
      var m=0
      // var data =  JSON.parse(localStorage.getItem('ram')); 
     //   console.log('la data7 es->',data);
       // console.log('la data7 es->',JSON.stringify(data));
       var data = data1.Bancos;
       this. datageneral=data
       if(data){
        var years=[]
  
        // this.meses.push("Perfil Financiero");
        var c=0
        var name;
        var name1;

        var a:any={ value: 0, label: "Todos los Bancos"}
        ++c
        this.priorityList.push(a);

        for (var i = 0; i < data.length; i++)
        {
    
          
        
            var obj = data[i].Anio;

            var Nombr = data[i].Nombre;
            // console.log( " Nombr-> " + Nombr);
            this.banks.push(Nombr);
            // var Nombre = Nombr[0];
            
            a={ value: c, label: Nombr }
            ++c
            this.priorityList.push(a);
            // for (var key in Nombre) {
            //   if (Nombre.hasOwnProperty(key)) {
            //       // console.log(key + " -> " + p[key]);
            //    

            //   }
            // }

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



        //   convert data name to index this.banks
        // for (var nb in this.priorityList) {
        //   console.log(' nb["value"] es->',nb["value"]);

        //   if(nb["value"]== indexselected) {
        //     nemselected=nb["label"]
        //   }

        //   }


          var fh=this.priorityList
          for (var key in fh) {
            if (fh.hasOwnProperty(key)) {


              var indexkey=Number(key);
         if(indexkey== indexselected) {
          var bb:any=fh[key]
     
              nemselected=bb.label
              console.log(bb.label + " -> ESTE ES EL bb" );

            
          }


                // console.log(key + " -> ESTE ES EL MES" );
                // console.log(JSON.stringify(fh[key]) + " -> ESTE ES EL MvalueES" );
            

                
            }
        }
         console.log(' indexselected es->',indexselected);

         console.log(' nemselected777 es->',nemselected);





          this.yearsl=years
          // console.log(' this.banks es->',JSON.stringify(this.banks));

          // console.log(' data[ 0].Anio 5 es->',JSON.stringify( data[ 0].Anio));
  
          console.log(' this.banks.length es->',this.banks.length);
  

               
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
           var body2=[]

           if(data){
            var name;
            var name1;
          //   for (var i = 0; i < 7; i++)
  
            for (var i = 0; i < data.length ; i++)
            {
  
              // console.log('data.Bancos[i] e s->',data[i]);
      
              var row=[]
              var row2=[]

                // console.log('Anio entro s->');
                
                var nombre = data[i].Nombre;
                // row.push(nombre);
  
  
  
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
  

                 if (nemselected==nombre) {
                  console.log( "ombre==this.selectedbank && y==false con nombre"+nombre );
                  this.body.push(row);
                   this.footer=JSON.stringify(row)
              } 
               else if(nemselected=="Todos los Bancos") {
                  console.log( "y==true"  );
        
                  this.body.push(row);
                  body2.push(row2);

              }   
      
            }   
            // console.log('this.body es->',this.body);
            // console.log('body es->',JSON.stringify(this.body));
      


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
    





          }

         if(indexselected==0)   { 
         this.visiblehide=true
         this.hoursChartLegendItems = [
          { title: this.banks[0], imageClass: 'fa fa-circle uno' },
          { title:  this.banks[1], imageClass: 'fa fa-circle dos' },
          { title:  this.banks[3], imageClass: 'fa fa-circle tres' },
          { title:  this.banks[4], imageClass: 'fa fa-circle t4' },
          { title:  this.banks[5], imageClass: 'fa fa-circle t5' },
          { title: this.banks[6], imageClass: 'fa fa-circle t6' },
          { title:  this.banks[7], imageClass: 'fa fa-circle t7' },
          { title:  this.banks[8], imageClass: 'fa fa-circle t8' },
          { title:  this.banks[9], imageClass: 'fa fa-circle t9' },
          { title:  this.banks[10], imageClass: 'fa fa-circle t10' },
          { title: this.banks[11], imageClass: 'fa fa-circle t11' },
          { title:  this.banks[12], imageClass: 'fa fa-circle t12' },
          { title:  this.banks[13], imageClass: 'fa fa-circle t13' },
          { title:  this.banks[14], imageClass: 'fa fa-circle t14' },
          { title:  this.banks[15], imageClass: 'fa fa-circle t15' },
          { title: this.banks[16], imageClass: 'fa fa-circle t16' },
          { title:  this.banks[17], imageClass: 'fa fa-circle t17' }
      
        ];

      }else           this.hoursChartLegendItems = [
            { title:nemselected, imageClass: 'fa fa-circle text-info' },
           
          ];
      
  
     }

     meses=[]
     banks=[]
     body=[]
  footer=""
     priorityList: Array<any> = [];

  vergrafico(){

  this.titulo=" en rango de Abril 2020 a Abril 2021"
  this.hoursChartType = ChartType.Line;
  this.hoursChartData = {
    labels: this.meses,
    series:  this.body
  };
  this.hoursChartOptions = {
    low: 0,
    high: 20,
    showArea: false,
    height: '245px',
    axisX: {
      showGrid: true,
    },
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    showLine: true,
    showPoint: true,
  };
  this.hoursChartResponsive = [
    ['screen and (max-width: 940px)', {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];

}

  ngOnInit(): void {
   this.islogged() 
  }

}


// console.log(' this.banks.length es->',this.banks.length);
