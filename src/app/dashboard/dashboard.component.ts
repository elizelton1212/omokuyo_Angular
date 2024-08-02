import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ChartModule,
    MatCardModule,
    RouterModule

  ]
})
export class DashboardComponent {


  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'pie',
      name: 'Pessoas',
      data: [
        { name: 'Benguela', y: 30 },
        { name: 'Luanda', y: 70 },
        { name: 'Huambo', y: 70 },

      ]
    }]
  });

  addPoint() {
    if (this.chart.ref && this.chart.ref.series[0]) {
      this.chart.ref.series[0].addPoint({ name: 'Nova Parte', y: Math.floor(Math.random() * 100) });
    }
  }
}
