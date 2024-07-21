import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SalesReport } from './sales-report';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export default class ReportComponent implements OnInit, OnDestroy {
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();

  id: number;
  title: any;
  columns: any[] = [];
  data: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private salesReport: SalesReport
  ) {
    this.columns = this.salesReport.get().details;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['reportId'];
      this.setColumn(this.id);
    });
  }

  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: Event) => console.log(e));
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
  }

  setColumn(id: number): void {
    this.data = [
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '1',
        datePurch: 'Daily Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '2',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '3',
        datePurch: 'Monthly Sales Transaction',
        grossSales: 'Detailed transaction report'
      },
      {
        receiptCtr: '4',
        datePurch: 'Weekly Sales Transaction',
        grossSales: 'Detailed transaction report'
      }
    ];

    if (this.id == 1) {
      this.title = 'Daily Sales Item Transaction';
    } else if (this.id == 2) {
      this.title = 'Weekly Sales Item Transaction';
    } else if (this.id == 3) {
      this.title = 'Monthly Sales Item Transaction';
    } else if (this.id == 4) {
      this.title = 'Yearly Sales Item Transaction';
    }
  }
}
function onWindowScroll() {
  throw new Error('Function not implemented.');
}
