import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../core/services/carro.service';
import {Carro} from '../models/carro.models';
import { CarroPrecoComponent } from '../carro-preco/carro-preco.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  carro: Carro = {
    nome: '',
    cor: ''
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.router.navigate(["/carro"])
  }
}
