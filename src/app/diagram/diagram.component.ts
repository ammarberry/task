import { Component, ViewChild} from '@angular/core';
import {
 
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
 
})
export class DiagramComponent {
  

  @ViewChild("chart") chart!: DiagramComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "استخدام",
          data: [31, 40, 28, 51, 42, 109, 100,90,80,55,45,66,77,]
        },
        // {
        //   name: "series2",
        //   data: [11, 32, 45, 32, 34, 52, 41]
        // }
      ],
      chart: {
        height: 305,
        type: "area" 
      },
      dataLabels: {
        enabled: false
      },
    
      stroke: {
        curve: "smooth"
      },
      yaxis:{
        opposite:false,
        show:false
       },
      xaxis: {
        // type: "Monthley Avergare",
        categories: [
          'ديسمبر','نوفمبر','اكتوبر','سبتمبر','اغسطس','يوليو','يونيو','مايو','ابريل','مارس','فبراير','يناير'
        ]
      },
      
      tooltip: {
        x: {
        format: "dd/MM/yy HH:mm"
          

        }
      }
    };
  }

}
