import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionDeDivisasComponent } from './cotizacion-de-divisas.component';

describe('CotizacionDeDivisasComponent', () => {
  let component: CotizacionDeDivisasComponent;
  let fixture: ComponentFixture<CotizacionDeDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionDeDivisasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionDeDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
