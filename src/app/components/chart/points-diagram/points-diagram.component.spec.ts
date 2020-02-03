import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsDiagramComponent } from './points-diagram.component';

describe('PointsDiagramComponent', () => {
  let component: PointsDiagramComponent;
  let fixture: ComponentFixture<PointsDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
