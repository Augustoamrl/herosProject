import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Personagem } from 'src/app/core/interfaces/personagem';
import { SerieByPersonagem } from 'src/app/core/interfaces/serie-by-personagem';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.scss']
})
export class PersonagemDetalhesComponent implements OnInit {
  personagemSelecionado: Personagem[] = [];
  personagemId: number = 0;
  seriesQueParticipou: SerieByPersonagem[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private marvelService: MarvelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPersonagemId();
  }

  getPersonagemId(): void {
    this.personagemId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getAllSeriesByPersonagemById(this.personagemId);
  }


  getAllSeriesByPersonagemById(personagemId: number): void {
    this.marvelService.getAllSeriesByPersonagemById(personagemId)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.seriesQueParticipou = response.data.results;
      });
  }

  navegarParaPersonagemList(): void {
    this.location.back();
  }

}
