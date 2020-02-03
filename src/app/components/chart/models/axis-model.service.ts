import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AxisModel {

  position: number;
  value: any;
  constructor(position: number, value: any) {
    this.position = position;
    this.value = value;
  }
}
