import { CoordinateModel } from './coordinate-model.service';
import { HelperService } from 'src/app/services/helper.service';

export class SeriesModel {

  points: CoordinateModel[];
  color: string;

  constructor(
    canvasMapStart: number[],
    canvasMapEnd: number[],
    dataStart: number[],
    dataEnd: number[],
    yValues: number[],
    color: string,
  ) {

    this.color = color;

    // Init points
    this.points = yValues.map((value, i) => {
      return new CoordinateModel({
        x: HelperService.coordMap(

          [canvasMapStart[0], canvasMapEnd[0]],
          [dataStart[0], dataEnd[0]],
          i),
        y: HelperService.coordMap(
          [canvasMapStart[1], canvasMapEnd[1]],
          [dataStart[1], dataEnd[1]],
          value),
        size: 6,
        color: this.color,
        secondaryColor: 'white',
        title: value
      })
    })
  }
}
