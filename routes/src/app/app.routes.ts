import { Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TestguardComponent } from './pages/testguard/testguard.component';

export const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  {
    // portfolio, portfolio/1, portfolio/1/abc
    path: 'portfolio',
    component: CardComponent,
    children: [
      { path: ':id', component: CardComponent }, // rota filha com parâmetro
      { path: ':id/:token', component: CardComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'guard', component: TestguardComponent, canActivate: [authGuard] }, // só acessa se existir token na sessão
  { path: '**', redirectTo: '' }, // rota coringa
];
