import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { EntryDataComponent } from './entry-data/entry-data.component';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
    TitleComponent,
    CheckSampleComponent,
    CommonModule,
    CardComponent,
    CompAtributosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basics';
  buttonLabel: string = 'Click aqui';
  buttonSecond: string = 'Não click aqui';
  isAliveCheckSample: boolean = true;
  isAliveCard: boolean = true;

  disposeCheckSample(): void {
    this.isAliveCheckSample = false;
  }
}
