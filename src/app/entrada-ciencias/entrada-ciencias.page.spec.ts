import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaCienciasPage } from './entrada-ciencias.page';

describe('EntradaCienciasPage', () => {
  let component: EntradaCienciasPage;
  let fixture: ComponentFixture<EntradaCienciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaCienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
