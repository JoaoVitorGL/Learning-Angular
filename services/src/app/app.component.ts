import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TransformPipe } from './pipes/transformador.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, TransformPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Angular';
}
