import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { AxisModel } from '../models/axis-model.service';


@Component({
  selector: '[app-cartesian-system]',
  templateUrl: './cartesian-system.component.html',
  styleUrls: ['./cartesian-system.component.scss'],
  providers: [HelperService]
})
export class CartesianSystemComponent implements OnInit {

  cartesianXPositions: AxisModel[];
  cartesianYPositions: AxisModel[];
  @Input()
  fill: string;
  @Input()
  stroke: string;
  @Input()
  padding: number;
  @Input()
  canvasHeight: number;
  @Input()
  canvasWidth: number;

  @Input()
  xAxis: number[];

  @Input()
  yExtremeValues: number[];

  constructor() { }

  ngOnInit() {
    this.fill = this.fill ? this.fill : '#3d3d3d';
    this.stroke = this.stroke ? this.stroke : '#3d3d3d10';
    this.initData();
  }

  initData() {

    this.cartesianXPositions = this.xAxis.map((v, i) => {
      return new AxisModel(
        HelperService.coordMap([this.padding, this.canvasWidth - this.padding], [0, this.xAxis.length - 1], i),
        v
      )
    });


    const yPositions = HelperService.calcCartesianYPositions(this.yExtremeValues[1], this.yExtremeValues[0]);


    this.cartesianYPositions = yPositions.array.map((value) => {
      return new AxisModel(
        HelperService.coordMap([this.canvasHeight - this.padding, this.padding], this.yExtremeValues, value),
        value
      )
    })

    // init cartesian
    // let x = this.helper.coordMap([this.sysPadding, this.width - this.sysPadding], [0, this.xAxis.length - 1], 0);
    // let y = this.helper.coordMap([this.height - this.sysPadding, this.sysPadding], this.yExtValues, this.yExtValues[0]);
    // this.cartesianStart = [x, y]
  }


  public drawHorizontalLine(y: number, toLimit: boolean = false) {
    let p = toLimit ? 0 : this.padding;
    return HelperService.svgLine([[y, p], [y, this.canvasHeight - p]]);
  }
  public drawVerticalLine(x: number, toLimit: boolean = false) {
    const p = toLimit ? 0 : this.padding;
    return HelperService.svgLine([[p, x], [this.canvasWidth - p, x]]);
  }

}
