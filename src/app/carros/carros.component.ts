import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../core/services/carro.service';
import {Carro} from '../models/carro.models';
import { CarroPrecoComponent } from '../carro-preco/carro-preco.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})

export class CarrosComponent implements OnInit {

  carros!: Carro[];
  carro: Carro = {
    nome: '',
    cor: '',

  };

  carroSelecionado!: Carro;
  gridColumns = 3;

  constructor(
    private service: CarroService,
    private router: Router,


    ){}


  ngOnInit(): void {
    this.getCarros();
  }

  selecionarCarro(c: Carro): void{
    this.carroSelecionado = c;
  }

  getCarros(): void {
    this.service.getAll().subscribe(carros => {
      this.carros = carros
    });
  }
  remove(carro: Carro): void {
    this.service.delete(carro.id!).subscribe(() => {
      this.carros = this.carros.filter(c => c.id != carro.id);
      window.alert('Carro deletado');
    });
  }
  create(): void {
    this.router.navigate(["/carro"])
  }

  financiamento(): void {
    this.router.navigate(["/carro-preco"])
  }

}

