import { Component, OnInit } from '@angular/core';
import { catchError, lastValueFrom, throwError } from 'rxjs';
import { Character } from 'src/app/core/interfaces/character';
import { MarvelResponse } from 'src/app/core/interfaces/marvel-response';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.scss']
})
export class PersonagemListComponent implements OnInit {
  herois: any[] = [
    { personagem: 'Homem-Aranha', series: 'O Espetacular Homem-Aranha', eventos: 'A Queda dos Vingadores' },
    { personagem: 'Capitão América', series: 'Capitão América: O Primeiro Vingador', eventos: 'A Guerra Civil' },
    { personagem: 'Thor', series: 'O Poderoso Thor', eventos: 'O Ragnarok' },
    { personagem: 'Hulk', series: 'O Incrível Hulk', eventos: 'A Era de Ultron' },
    { personagem: 'Viúva Negra', series: 'Viúva Negra', eventos: 'O Cerco' }
  ];
  nomeBusca: string = '';
  paginaAtual: number = 1;
  itensPorPagina: number = 2;

  characterList: Character[] = []
  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    console.log('personagem')
    this.getCharacter();
  }

  getCharacter(): void {
    const response = lastValueFrom(this.marvelService.getCharacters());
    response.then((data) => {
      console.log(data)
      this.characterList = data.data.results
      return data
    }).catch((err) => {
      console.log('kk')
    });
  }

  getCharacter2(): void {
    this.marvelService.getCharacters()
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.characterList = response.data.results;
      });
  }




  get numPaginas(): number {
    return Math.ceil(this.heroisFiltrados.length / this.itensPorPagina);
  }

  get heroisFiltrados(): Character[] {
    return this.herois.filter(heroi => heroi.personagem.toLowerCase().includes(this.nomeBusca.toLowerCase()));
  }

  paginaAnterior() {
    this.paginaAtual--;
  }

  proximaPagina() {
    this.paginaAtual++;
  }

}
