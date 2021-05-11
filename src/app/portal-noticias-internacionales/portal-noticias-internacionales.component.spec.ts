import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasInternacionalesComponent } from './portal-noticias-internacionales.component';

describe('PortalNoticiasInternacionalesComponent', () => {
  let component: PortalNoticiasInternacionalesComponent;
  let fixture: ComponentFixture<PortalNoticiasInternacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalNoticiasInternacionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasInternacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
