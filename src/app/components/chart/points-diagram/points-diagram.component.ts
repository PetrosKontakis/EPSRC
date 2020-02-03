import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SeriesModel } from '../models/series-model.service';

@Component({
  selector: '[app-points-diagram]',
  templateUrl: './points-diagram.component.html',
  styleUrls: ['./points-diagram.component.scss']
})
export class PointsDiagramComponent implements OnInit {


  @Input()
  series: SeriesModel;

  @Output()
  mouseEvent = new EventEmitter();

  points: any[];
  constructor() { }

  ngOnInit() {
    this.points = this.series.points;
  }


  mouseEnter(p: any) {
    this.mouseEvent.emit(p)
  }
  mouseLeave(p: any) {
    this.mouseEvent.emit(null)
  }
}
