import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarroService } from '../core/services/carro.service';
import { Carro } from '../models/carro.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})

export class CarroComponent implements OnInit {

  carro!: Carro;

  @Input()
  carroSelecionado!: Carro;

  constructor(
    private route: ActivatedRoute,
    private service: CarroService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getCarro();
  }


  getCarro(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== undefined && id !== null){
       this.service.getById(parseInt(id)).subscribe(data => this.carro = data);
    }
  }
  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null && id !== undefined){
      this.service.update(this.carro, parseInt(id,10)).subscribe(() => {
      window.alert('Salvo com sucesso!');

    });
    }
  }
  goBack(): void {
    this.location.back();
  }

}
