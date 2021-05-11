import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDiecinueveComponent } from './covid-diecinueve.component';

describe('CovidDiecinueveComponent', () => {
  let component: CovidDiecinueveComponent;
  let fixture: ComponentFixture<CovidDiecinueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDiecinueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDiecinueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
