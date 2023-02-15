import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/app/core/interfaces/character';


@Pipe({
    name: 'paginacao'
})
export class PaginacaoPipe implements PipeTransform {
    transform(personagem: Character[], paginaAtual: number, itensPorPagina: number): Character[] {
        const indiceInicial = (paginaAtual - 1) * itensPorPagina;
        return personagem.slice(indiceInicial, indiceInicial + itensPorPagina);
    }
}