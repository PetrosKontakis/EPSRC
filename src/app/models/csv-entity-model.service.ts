import { Injectable, Output } from '@angular/core';
import { HelperService } from '../services/helper.service';

// @Injectable({
//   providedIn: 'root'
// })
export class CsvEntityModelService {

  private value: any;
  public rowData: string;
  private date: Date;

  constructor(rowData: string) {

    this.rowData = rowData;
    // entity is number
    if (this.isNumber()) {
      this.value = Number(rowData);
      return;
    }
    //entity is date
    if (this.isDate()) {
      this.setDate(rowData)
      return;
    }
    // Entity is string
    this.value = this.rowData
  }

  public get() {
    return this.rowData;
  }

  public setDate(date: string) {
    this.date =  HelperService.stringToDate(date);
    this.value = this.date.getTime();
  }

  public getActualValue() {
    return this.value;
  }

  public isNumber() {
    return !isNaN(Number(this.rowData));
  }

  public isDate() {
    return this.rowData.match(/^\d{2}\/\d{2}\/\d{4}$/);
  }
}
