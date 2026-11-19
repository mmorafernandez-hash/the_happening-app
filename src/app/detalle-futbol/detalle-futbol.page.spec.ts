import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleFutbolPage } from './detalle-futbol.page';

describe('DetalleFutbolPage', () => {
  let component: DetalleFutbolPage;
  let fixture: ComponentFixture<DetalleFutbolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
