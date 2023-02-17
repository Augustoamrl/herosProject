import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemDetalhesComponent } from './personagem-detalhes/personagem-detalhes.component';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';


const routes: Routes = [
    {
        path: '',
        component: PersonagemListComponent
    },
    {
        path: 'detalhes/:id',
        component: PersonagemDetalhesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonagemRoutingModule { }
