import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCienciasPage } from './detalle-ciencias.page';

describe('DetalleCienciasPage', () => {
  let component: DetalleCienciasPage;
  let fixture: ComponentFixture<DetalleCienciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
