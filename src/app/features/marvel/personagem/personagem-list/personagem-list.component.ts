import { Component, OnInit } from '@angular/core';
import { catchError, lastValueFrom, throwError } from 'rxjs';
import { Personagem } from 'src/app/core/interfaces/personagem';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.scss']
})
export class PersonagemListComponent implements OnInit {
  nomeBusca: string = '';
  paginaAtual: number = 1;
  itensPorPagina: number = 5;

  personagens: Personagem[] = []
  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.getPersonagem();
  }

  getPersonagem(): void {
    const response = lastValueFrom(this.marvelService.getPersonagem());
    response.then((data) => {
      console.log(data)
      this.personagens = data.data.results
      return data
    }).catch((err) => {
      console.log('kk')
    });
  }

  getCharacter2(): void {
    this.marvelService.getPersonagem()
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.personagens = response.data.results;
      });
  }


  get numPaginas(): number {
    return Math.ceil(this.personagemFiltrado.length / this.itensPorPagina);
  }

  get personagemFiltrado(): Personagem[] {
    return this.personagens.filter(personagem => personagem.name.toLowerCase().includes(this.nomeBusca.toLowerCase()));
  }

  paginaAnterior() {
    this.paginaAtual--;
  }

  proximaPagina() {
    this.paginaAtual++;
  }

}
