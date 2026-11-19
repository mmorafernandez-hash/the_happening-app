import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaCulturalPage } from './entrada-cultural.page';

describe('EntradaCulturalPage', () => {
  let component: EntradaCulturalPage;
  let fixture: ComponentFixture<EntradaCulturalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaCulturalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
