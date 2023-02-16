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

  get paginas(): number[] {
    const paginasTotais = Math.ceil(this.personagens.length / this.itensPorPagina);
    const paginasVisiveis = 5;
    const paginasAntesDepois = Math.floor(paginasVisiveis / 2);

    let inicio = Math.max(this.paginaAtual - paginasAntesDepois, 1);
    let fim = Math.min(inicio + paginasVisiveis - 1, paginasTotais);

    if (fim - inicio < paginasVisiveis - 1) {
      inicio = Math.max(fim - paginasVisiveis + 1, 1);
    }

    return Array(fim - inicio + 1).fill(0).map((_, idx) => inicio + idx);
  }

  irParaPagina(pagina: number) {
    if (pagina < 1 || pagina > this.paginas[this.paginas.length - 1]) {
      return;
    }

    this.paginaAtual = pagina;
  }
}
