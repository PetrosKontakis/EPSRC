import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CsvModelService } from 'src/app/models/csv-model.service';
import { CsvEntityModelService } from 'src/app/models/csv-entity-model.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dataStream = new BehaviorSubject<any>({ sortBy: null, csvData: null, prevSort: null });

  csvData: CsvModelService;
  head: string[];
  rows: CsvEntityModelService[][];
  sortedHash: {} = {};

  @Input()
  set csv(value: CsvModelService) {
    this.dataStream.next({
      csvData: value
    });
  }

  constructor(private helper: HelperService) {
  }

  ngOnInit() {

    this.dataStream
      .pipe(

        // Sort rows
        map((stream) => {

          if (stream.sortBy >= 0 && stream.csvData && stream.csvData.rows) {
            // sort rows from csvData
            this.sortRows(stream.csvData.rows, stream.prevSort, stream.sortBy);
          }
          return {
            sortBy: stream.sortBy,
            csvData: stream.csvData
          }
        })
      )
      .subscribe((stream) => {
        this.csvData = stream.csvData;
        this.head = stream.csvData.head;
        this.rows = stream.csvData.rows;
        this.sortedHash[stream.sortBy] = !this.sortedHash[stream.sortBy];
      })


  }

  sortByIndexClick(index: number) {
    this.dataStream.next({
      sortBy: index,
      prevSort: this.sortedHash[index],
      csvData: this.csvData
    })
  }


  private sortRows(array: CsvEntityModelService[][], asc: number, sortColumnIndex: number) {
    let sortOrder: number = asc ? 1 : -1;

    // Change actual array
    array.sort((a: CsvEntityModelService[], b: CsvEntityModelService[]) => {
      let dataA: any = a[sortColumnIndex].getActualValue();
      let dataB: any = b[sortColumnIndex].getActualValue();
      if (dataA < dataB)
        return -1 * sortOrder
      else if (dataA > dataB)
        return sortOrder
      return 0
    });
  }


}
