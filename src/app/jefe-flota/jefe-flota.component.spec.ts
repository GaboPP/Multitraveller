import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeFlotaComponent } from './jefe-flota.component';

describe('JefeFlotaComponent', () => {
  let component: JefeFlotaComponent;
  let fixture: ComponentFixture<JefeFlotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JefeFlotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JefeFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
