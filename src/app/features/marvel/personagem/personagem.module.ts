import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemRoutingModule } from './personagem-routing.module';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PersonagemListComponent
    ],
    imports: [
        CommonModule,
        PersonagemRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
})
export class PersonagemModule { }
