import { Injectable } from '@angular/core';
import { CsvEntityModelService } from './csv-entity-model.service';
import { HelperService } from '../services/helper.service';

// @Injectable({
//   providedIn: 'root'
// })
export class CsvModelService {

  head: string[];
  rows: CsvEntityModelService[][]


  constructor(csv: string) {

    const data = HelperService.csvToArray(csv)

    this.head = data.shift();
    this.rows = data.map((row: string[]) => {
      return row.map((column: string) => new CsvEntityModelService(column))
    })

  }

  public findIndexOfTitle(title: string) {
    return this.head.findIndex(headTitle => headTitle === title)
  }


}
