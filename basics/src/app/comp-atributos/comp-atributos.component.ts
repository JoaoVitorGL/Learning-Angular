import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-atributos',
  imports: [NgClass, NgStyle, FormsModule, CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css',
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'red';
  corFonte: string = 'white';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = true;

  constructor() {}

  trocar() {
    if (this.estilo == 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

  adicionarLista() {
    this.lista.push(this.item);
  }
}
