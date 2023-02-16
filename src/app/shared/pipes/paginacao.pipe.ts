import { Pipe, PipeTransform } from '@angular/core';
import { Personagem } from 'src/app/core/interfaces/personagem';



@Pipe({
    name: 'paginacao'
})
export class PaginacaoPipe implements PipeTransform {
    transform(personagem: Personagem[], paginaAtual: number, itensPorPagina: number): Personagem[] {
        const indiceInicial = (paginaAtual - 1) * itensPorPagina;
        return personagem.slice(indiceInicial, indiceInicial + itensPorPagina);
    }
}