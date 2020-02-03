import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearDiagramComponent } from './linear-diagram.component';

describe('LinearDiagramComponent', () => {
  let component: LinearDiagramComponent;
  let fixture: ComponentFixture<LinearDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
