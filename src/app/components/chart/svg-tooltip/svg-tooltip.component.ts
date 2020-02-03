import { Component, OnInit, Input } from '@angular/core';
import { CoordinateModel } from '../models/coordinate-model.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-svg-tooltip',
  templateUrl: './svg-tooltip.component.html',
  styleUrls: ['./svg-tooltip.component.scss']
})
export class SvgTooltipComponent implements OnInit {
  pointStream = new BehaviorSubject<any>({ sortBy: null, csvData: null, prevSort: null });

  @Input()
  set point(value: CoordinateModel) {
    this.pointStream.next(value);
  }

  title: string;
  x: number;
  y: number;
  show: boolean;

  constructor() {

  }

  ngOnInit() {
    this.pointStream.subscribe(p => {
      if (p) {
        this.title = p.title;
        this.y = p.y;
        this.x = p.x;
        this.show = true;
        return;
      }
      this.show = false;
    })
  }

}
