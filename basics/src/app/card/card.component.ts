import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = '';

  constructor() {
    this.produtos = ['mouse', 'teclado', 'fone', 'fonte'];
  }

  adicionar() {
    this.produtos.push('adicionado');
  }
  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
