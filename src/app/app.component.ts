import { Component } from '@angular/core';
import HttpHelper from './services/http-helper.service';
import { map } from 'rxjs/operators'
import { HelperService } from './services/helper.service';
import { CsvModelService } from './models/csv-model.service';
import { CsvEntityModelService } from './models/csv-entity-model.service';

enum STATES {
  LOADING,
  SERVER_ERROR,
  NORMAL
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  viewState: number;
  STATES = STATES;
  csvData: CsvModelService;

  daysTotal: any;
  daysMaxMin: any;
  daysAvg: any;

  constructor(private api: HttpHelper, private helper: HelperService) {
  }

  ngOnInit() {
    this.getSpendTransactions()
  }

  private getSpendTransactions() {
    // update view state
    this.viewState = STATES.LOADING;

    // Http call to get data
    this.api.getSpendTransactions().pipe(
      // Transform csv plain string to CsvModelService
      map((res: string) => {
        return new CsvModelService(res)
      })
    )
      .subscribe(
        (res: CsvModelService) => {
          this.csvData = res;
          this.setMonthTotals(res)
          this.viewState = STATES.NORMAL;
        }, (error) => {
          this.viewState = STATES.SERVER_ERROR;
        })
  }

  private setMonthTotals(res: CsvModelService) {

    const dateIndex = res.findIndexOfTitle('Date');
    const priceIndex = res.findIndexOfTitle('Amount')

    const perDay = res.rows.reduce((reducer, row) => {
      let hashArray = reducer[row[dateIndex].rowData] !=null ? reducer[row[dateIndex].rowData] : [];
      hashArray.push(row);
      reducer[row[dateIndex].rowData] = hashArray;
       return reducer;
    }, {});

    const xAxis = [];
    const totalValues = [];
    const minValues = [];
    const maxValues = [];
    const avgValues = [];

    for(let i in perDay){
      xAxis.push(i);
      let sum = perDay[i].reduce((reducer, row)=>{
          return reducer + row[priceIndex].value;
      }, 0)
      let prices = perDay[i].map((row)=>{
        return row[priceIndex].value;
      })
      minValues.push(Math.min(...prices));
      maxValues.push(Math.max(...prices));
      totalValues.push(sum);
      avgValues.push(Math.round(sum/prices.length *10)/10)
    }
    
    
    this.daysTotal = {
      xAxis: xAxis,
      seriesA: totalValues,
      title: "Total Price per day",
      type: "LINE"
    }

    this.daysMaxMin = {
      xAxis: xAxis,
      seriesA: maxValues,
      seriesB: minValues,
      title: "Maximum & Minimum Prices per day",
      type: "BAR"
    }
    this.daysAvg = {
      xAxis: xAxis,
      seriesA: avgValues,
      title: "Average Prices per day",
      type: "BAR"
    }
  }
}
