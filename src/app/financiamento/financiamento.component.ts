import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financiamento',
  templateUrl: './financiamento.component.html',
  styleUrls: ['./financiamento.component.scss']
})
export class FinanciamentoComponent implements OnInit {

  constructor(
    private service: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
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



