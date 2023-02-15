import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/app/core/interfaces/character';


@Pipe({
    name: 'filtroPorNome'
})
export class FiltroPorNomePipe implements PipeTransform {
    transform(personagens: Character[], nomeBusca: string): Character[] {
        if (!nomeBusca) {
            return personagens;
        }
        return personagens.filter(item => item.name.toLowerCase().includes(nomeBusca.toLowerCase()));
    }
}