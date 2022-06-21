import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financiamento2',
  templateUrl: './financiamento2.component.html',
  styleUrls: ['./financiamento2.component.scss']
})
export class Financiamento2Component implements OnInit {


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
