import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesianSystemComponent } from './cartesian-system.component';

describe('CartesianSystemComponent', () => {
  let component: CartesianSystemComponent;
  let fixture: ComponentFixture<CartesianSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartesianSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartesianSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
