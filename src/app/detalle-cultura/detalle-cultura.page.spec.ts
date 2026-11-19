import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCulturaPage } from './detalle-cultura.page';

describe('DetalleCulturaPage', () => {
  let component: DetalleCulturaPage;
  let fixture: ComponentFixture<DetalleCulturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
