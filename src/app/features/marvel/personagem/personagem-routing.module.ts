import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';


const routes: Routes = [
    {
        path: '',
        component: PersonagemListComponent
    },
    // {
    //     path: 'personagem-detalhes',
    //     component: 
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonagemRoutingModule { }
