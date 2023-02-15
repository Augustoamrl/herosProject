import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.scss']
})
export class PersonagemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('personagem')
  }

}
