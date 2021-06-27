import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {
  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];
  titulo=" en rango de Abril a Mayo"
  constructor() { }

  ngOnInit(): void {
    this.titulo=" en rango de Abril a Mayo"
    this.hoursChartType = ChartType.Line;
    this.hoursChartData = {
      labels: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      series: [
        [3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4],
        [1, 1, 1, 1, 2, 2, 2, 2, 2, 2,1, 1],
        [5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6],
        [15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16]
      ]
    };
    this.hoursChartOptions = {
      low: 0,
      high: 16,
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
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.hoursChartLegendItems = [
      { title: 'Industrial', imageClass: 'fa fa-circle text-info' },
      { title: 'De los trabajadores', imageClass: 'fa fa-circle text-danger' },
      { title: 'De america Central', imageClass: 'fa fa-circle text-warning' },
      { title: 'Gyt Continental', imageClass: 'fa fa-circle text-warning' }
    ];
  }

}
