import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroPrecoComponent } from './carro-preco.component';

describe('CarroPrecoComponent', () => {
  let component: CarroPrecoComponent;
  let fixture: ComponentFixture<CarroPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
