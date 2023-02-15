import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    console.log('personagem')
  }

}
