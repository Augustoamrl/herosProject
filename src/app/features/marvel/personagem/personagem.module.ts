import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemRoutingModule } from './personagem-routing.module';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginacaoPipe } from 'src/app/shared/pipes/paginacao.pipe';
import { FiltroPorNomePipe } from 'src/app/shared/pipes/filtro-por-nome.pipe';

@NgModule({
    declarations: [
        PersonagemListComponent,
        FiltroPorNomePipe,
        PaginacaoPipe
    ],
    imports: [
        CommonModule,
        PersonagemRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
})
export class PersonagemModule { }
