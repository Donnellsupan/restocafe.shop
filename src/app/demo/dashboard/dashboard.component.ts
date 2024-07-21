// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/http-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent implements OnInit {
  reports = [
    {
      id: '1',
      title: 'Daily Sales',
      text: 'Sales item transaction report'
    },
    {
      id: '2',
      title: 'Weekly Sales',
      text: 'Sales item transaction report'
    },
    {
      id: '3',
      title: 'Monthly Sales',
      text: 'Sales item transaction report'
    },
    {
      id: '4',
      title: 'Yearly Sales',
      text: 'Sales item transaction report'
    }
  ];
  sales: any[] = [];
  constructor(
    private router: Router,
    private httpService: GenericService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/auth/signin']);
    }

    this.httpService.get('report/GetSalesSummary').subscribe((data) => {
      this.sales = [
        {
          title: 'Daily Sales',
          icon: 'icon-trending-up text-c-green',
          amount: data.dailyTotal,
          design: 'col-md-6'
        },
        {
          title: 'Weekly Sales',
          icon: 'icon-pie-chart text-c-green',
          amount: data.weeklyTotal,
          design: 'col-md-6'
        },
        {
          title: 'Monthly Sales',
          icon: 'icon-pie-chart text-c-green',
          amount: data.monthlyTotal,
          design: 'col-md-6'
        },
        {
          title: 'Yearly Sales',
          icon: 'icon-pie-chart text-c-green',
          amount: data.yearlyTotal,
          design: 'col-md-12'
        }
      ];
    });
  }

  showReport(data: any): void {
    this.router.navigate([`/report/view/${data.id}`]);
  }
}
