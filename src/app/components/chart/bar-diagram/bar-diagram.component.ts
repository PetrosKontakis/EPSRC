import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SeriesModel } from '../models/series-model.service';

@Component({
  selector: '[app-bar-diagram]',
  templateUrl: './bar-diagram.component.html',
  styleUrls: ['./bar-diagram.component.scss']
})
export class BarDiagramComponent implements OnInit {

  @Input()
  series: SeriesModel;
  @Input()
  index: number;
  @Input()
  yAxis: number;
  @Input()
  overlap: number;
  @Output()
  mouseEvent = new EventEmitter();

  width: number;

  rectangles: any[];

  constructor() {

    this.width = 10;
    this.overlap = 0.4;
  }

  ngOnInit() {
    this.rectangles = this.series.points.map(
      (point) => {

        let x, y, height, width;
        x = point.x + (this.index * this.width * (1 - this.overlap));
        y = (point.y >= this.yAxis) ? this.yAxis : point.y;
        width = this.width;
        height = Math.abs(this.yAxis - point.y);
        return {
          ...point,
          x, y, width, height
        }
      }
    )

  }

  mouseEnter(p: any) {
    this.mouseEvent.emit(p)
  }
  mouseLeave(p: any) {
    this.mouseEvent.emit(null)
  }

}
