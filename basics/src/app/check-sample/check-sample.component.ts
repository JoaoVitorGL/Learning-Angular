import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css',
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  constructor() {}

  adicionar() {
    this.quantidade++;
  }

  decrementar() {
    this.quantidade--;
  }

  //checked -> content -> view

  //quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  //após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  //após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('Componente destruído');
  }
}
