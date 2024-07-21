import { Injectable } from '@angular/core';

export interface header {
  idName: string;
  label: string;
}

export interface reports {
  id: number;
  reportName: string;
  details?: header[];
}

const list = {
  id: 1,
  reportName: 'Daily Sales Item Transaction',
  details: [
    {
      idName: 'receiptCtr',
      label: 'Receipt Ctr #'
    },
    {
      idName: 'datePurch',
      label: 'Tran Date'
    },
    {
      idName: 'grossSales',
      label: 'Gross Sales'
    }
  ]
};
@Injectable({
  providedIn: 'root'
})
export class SalesReport {
  get() {
    return list;
  }
}
