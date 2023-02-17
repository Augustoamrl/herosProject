import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemRoutingModule } from './personagem-routing.module';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginacaoPipe } from 'src/app/shared/pipes/paginacao.pipe';
import { FiltroPorNomePipe } from 'src/app/shared/pipes/filtro-por-nome.pipe';
import { PersonagemDetalhesComponent } from './personagem-detalhes/personagem-detalhes.component';
import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
    declarations: [
        PersonagemListComponent,
        FiltroPorNomePipe,
        PaginacaoPipe,
        PersonagemDetalhesComponent
    ],
    imports: [
        CommonModule,
        PersonagemRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PersonagemModule { }
