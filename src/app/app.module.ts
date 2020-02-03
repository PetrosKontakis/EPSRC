import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VirtualScrollerModule } from 'ngx-virtual-scroller'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelper } from './services/http-helper.service';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ChartComponent } from './components/chart/chart.component';
import { CartesianSystemComponent } from './components/chart/cartesian-system/cartesian-system.component';
import { LinearDiagramComponent } from './components/chart/linear-diagram/linear-diagram.component';
import { SvgTooltipComponent } from './components/chart/svg-tooltip/svg-tooltip.component';
import { PointsDiagramComponent } from './components/chart/points-diagram/points-diagram.component';
import { BarDiagramComponent } from './components/chart/bar-diagram/bar-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ChartComponent,
    CartesianSystemComponent,
    LinearDiagramComponent,
    SvgTooltipComponent,
    PointsDiagramComponent,
    BarDiagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VirtualScrollerModule
  ],
  providers: [HttpHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
