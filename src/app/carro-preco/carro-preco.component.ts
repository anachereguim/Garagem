import { Component, OnInit } from '@angular/core';
import { CarroService } from '../core/services/carro.service';
import { Carro } from '../models/carro.models';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-preco',
  templateUrl: './carro-preco.component.html',
  styleUrls: ['./carro-preco.component.scss']
})
export class CarroPrecoComponent implements OnInit {


  constructor(
    private service: Router,
    private location: Location

  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }


  selectedLink!: string;

  setradio(e: string): void
{

      this.selectedLink = e;

}

  isSelected(name: string): boolean
{

      if (!this.selectedLink) {
          return false;
}

      return (this.selectedLink === name);
  }

}
