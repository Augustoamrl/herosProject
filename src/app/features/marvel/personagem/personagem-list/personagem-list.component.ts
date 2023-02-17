import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  personagens: Personagem[] = [];
  constructor(
    private marvelService: MarvelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPersonagem2();
  }

  // #region Aproachs diferentes para a mesma requisicao
  //esse aqui usando o lastValueFrom que comentei na entrevista
  getPersonagens(): void {
    const response = lastValueFrom(this.marvelService.getPersonagens());
    response.then((res) => {
      this.personagens = res.data.results;

      return res
    }).catch((err) => {
      //aqui entra um toaster avisando o usuario sobre o erro
      console.log('Não foi possivel buscar os personagens, tente novamente');
    });
  }

  getPersonagem2(): void {
    this.marvelService.getPersonagens()
      .pipe(
        catchError(error => {
          //aqui entra um toaster avisando o usuario sobre o erro
          console.log('Não foi possivel buscar os personagens, tente novamente');
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.personagens = response.data.results;
      });
  }

  // #endregion

  navegarParaDetalhesPersonagem(personagemId: number): void {
    this.router.navigate(['personagem/detalhes/' + personagemId]);
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
