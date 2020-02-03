import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { CoordinateModel } from '../models/coordinate-model.service';
import { SeriesModel } from '../models/series-model.service';

@Component({
  selector: '[app-linear-diagram]',
  templateUrl: './linear-diagram.component.html',
  styleUrls: ['./linear-diagram.component.scss'],
  providers: [HelperService]
})
export class LinearDiagramComponent implements OnInit {



  @Input()
  series: SeriesModel;


  points: any[];
  constructor() { }

  ngOnInit() {
    this.points = this.series.points;
  }

  // TODO: not working properly 
  public getBezierPolyline(points: CoordinateModel[] = []) {
    // M 10 80 Q 10 80, 95 80 T 180 80, 250 20 T 340 80
    return HelperService.svgCubicBezier(points.map((p) => [p.x, p.y]), 0);
  }


  public getLineString(points: CoordinateModel[]) {
    if (points)
      // M 10 80 Q 10 80, 95 80 T 180 80, 250 20 T 340 80
      return HelperService.svgLine(points.map((p) => [p.x, p.y]));

    return "";
  }


}
