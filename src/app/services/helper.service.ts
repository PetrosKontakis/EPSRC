import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  

  constructor() { }

  static csvToArray(csv: string) {
    const rows = csv.split("\n");
    return rows.filter(row => row != "").map((row) => row.split(/,(?=\S)/))
  }

  static coordMap(canvasExt: number[], dataExt: number[], value: number) {
    return (value - dataExt[0]) / (dataExt[1] - dataExt[0]) * (canvasExt[1] - canvasExt[0]) + canvasExt[0];
  }
  

  static svgCubicBezier(coords: number[][], factor: number) {
    let svgString: string = "";

    if (!coords || coords.length == 0) {
      return svgString;
    }
    // M 10 80 Q 10 80, 95 80 T 180 80, 250 20 T 340 80

    svgString += `M ${coords[0].join(' ')} Q ${coords[0].join(' ')}`;
    for (let i = 1; i < coords.length - 1; i += 2) {
      svgString += `, ${coords[i].join(' ')} T ${coords[i + 1].join(' ')}`
    }

    return svgString;



  }
  static svgLine(coords: number[][]) {

    //0,100 50,25 50,75 100,0
    return coords.map(coord => coord.join(',')).join(" ");

  }

  static normalizePrice(price: number) {

    const absPrice = Math.abs(price)
    const digits = this.getLog10(absPrice)
    const numOfDigits = Math.floor(absPrice / digits);
    return ((numOfDigits * digits) + digits) * (price / absPrice)
  }

  static getLog10(absPrice: number) {
    absPrice = Math.abs(absPrice);
    return Math.pow(10, Math.floor(Math.log10(absPrice)));
  }

  static calcCartesianYPositions(max: number, min: number) {

    let normalMax: number, normalMin: number, step: number, array: number[] = [];
    normalMax = this.normalizePrice(max);
    normalMin = min;
    step = Math.max(this.getLog10(normalMin), this.getLog10(normalMax))


    let position = normalMax;
    while (position >= normalMin) {
      array.push(position);
      position -= step;
    }
    return { array, step };

  }

  static stringToDate(date: string){
    const match = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
    if (match && match.length == 4) {
      const day = match[1];
      const month = match[2];
      const year = match[3];
      // '1995-12-17T03:24:00'
      return new Date(`${year}-${month}-${day}T00:00:00`)
    }
    return new Date("0");
  }
}
