import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtrosEventosPage } from './otros-eventos.page';

describe('OtrosEventosPage', () => {
  let component: OtrosEventosPage;
  let fixture: ComponentFixture<OtrosEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
