import { Pipe, PipeTransform } from '@angular/core';
import { Personagem } from 'src/app/core/interfaces/personagem';



@Pipe({
    name: 'filtroPorNome'
})
export class FiltroPorNomePipe implements PipeTransform {
    transform(personagens: Personagem[], nomeBusca: string): Personagem[] {
        if (!nomeBusca) {
            return personagens;
        }
        return personagens.filter(personagem => personagem.name.toLowerCase().includes(nomeBusca.toLowerCase()));
    }
}