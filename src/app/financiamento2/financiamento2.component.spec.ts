import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Financiamento2Component } from './financiamento2.component';

describe('Financiamento2Component', () => {
  let component: Financiamento2Component;
  let fixture: ComponentFixture<Financiamento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Financiamento2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Financiamento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
