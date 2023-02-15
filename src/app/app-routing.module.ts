import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'personagem'
  },
  {
    path: 'personagem',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/marvel/personagem/personagem.module').then((m) => m.PersonagemModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
