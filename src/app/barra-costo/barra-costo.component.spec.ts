import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCostoComponent } from './barra-costo.component';

describe('BarraCostoComponent', () => {
  let component: BarraCostoComponent;
  let fixture: ComponentFixture<BarraCostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraCostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
