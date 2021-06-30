import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { VariableAst } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import {ServicesService} from '../../services/services.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
  constructor(private router:Router, private servicio:ServicesService,private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();


    var state 

   try {
    var ar= this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      // console.log( "param1 es"+params);
      // console.log( "param1 es"+JSON.stringify(params));
      console.log( "param1 es"+params.id);
      if(params.id== "4"){
        this.servicio.salir()
        this.showNotification('top','center','Cerro sesion correctamente!')

      }
      // In a real app: dispatch action to load the details here.
   });
   } catch (error) {
     
   }

    try {

      state = navigation.extras.state as {
        example: string,
        example2: string
  
      };

      
      if(state.example2== "1"){
        var user= localStorage.getItem('user');
        var m1="Bienvenido al sistema <b>  "+user+ "</b> !"
        this.showNotification('top','center',m1)
      }else{

        if(state.example2== "0"){
        var m1="Debe estar logueado para usar el sistema"
        console.log( "param1 es"+state.example );
        this.showNotification('top','center',m1)
        }
      }
     

     }
     catch (error) {
    }

   }

  showNotification(from, align,message1){
   

    const type = ['','info','success','warning','danger'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-gift",
        message: message1
    },{
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}
  ngOnInit() {
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
      this.emailChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
        { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [73, 73, 74, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [500, 500, 500, 508, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [400, 400, 400, 108, 190, 239, 307, 308, 439, 410, 410, 509],
          [600, 600, 600, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Click', imageClass: 'fa fa-circle text-danger' },
        { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];


    }

}
