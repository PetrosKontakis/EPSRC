import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { SeriesModel } from './models/series-model.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [HelperService]
})
export class ChartComponent implements OnInit {

  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  xAxis: any[];
  @Input()
  type: string;
  @Input()
  seriesA: number[];
  @Input()
  seriesB: number[];
  @Input()
  seriesC: number[];
  @Input()
  title: string;

  series: SeriesModel[];

  extremeValues: number[];

  sysPadding: number;

  seriesColor: string[];

  tooltipPoint: any;

  yAxisPosition: number;

  constructor() {
    this.type = 'LINE';
    this.seriesA = [];
    this.seriesB = [];
    this.seriesC = [];
    this.width = 500;
    this.height = 500;
    this.sysPadding = 50;
    this.series = [];
    this.seriesColor = ['#4d536090', '#fc1c0090', '#949fb190'];
  }

  ngOnInit() {
    this.initData();
  }


  initData() {


    const seriesData = [
      this.seriesA, this.seriesB, this.seriesC
    ]

    this.extremeValues = [
      Math.min(...this.seriesA, ...this.seriesB, ...this.seriesB),
      Math.max(...this.seriesA, ...this.seriesB, ...this.seriesB)];


    this.yAxisPosition = HelperService.coordMap(
      [this.height - this.sysPadding, 0 + this.sysPadding],
      this.extremeValues,
      0
    )


   
    for (let i in seriesData) {
      const data = seriesData[i];
      if (!data) {
        continue;
      }

      const mapStart = [this.sysPadding, this.height - this.sysPadding];
      const mapEnd = [this.width - this.sysPadding, this.sysPadding]

      const dataStart = [0, this.extremeValues[0]];
      const dataEnd = [this.xAxis.length - 1, this.extremeValues[1]]

      this.series.push(
        new SeriesModel(
          mapStart,
          mapEnd,
          dataStart,
          dataEnd,
          data,
          this.seriesColor[i]
        )
      )
    }

  }

  onMouseEvent(stream: any) {
    this.tooltipPoint = stream;
  }

}
