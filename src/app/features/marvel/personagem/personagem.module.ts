import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemRoutingModule } from './personagem-routing.module';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';

@NgModule({
    declarations: [
        PersonagemListComponent
    ],
    imports: [
        CommonModule,
        PersonagemRoutingModule,
    ],
})
export class PersonagemModule { }
