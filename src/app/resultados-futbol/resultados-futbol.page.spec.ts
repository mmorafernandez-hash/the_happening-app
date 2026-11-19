import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadosFutbolPage } from './resultados-futbol.page';

describe('ResultadosFutbolPage', () => {
  let component: ResultadosFutbolPage;
  let fixture: ComponentFixture<ResultadosFutbolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
