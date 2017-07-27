import { Component, Input, OnInit } from '@angular/core';

import { Jogo } from 'app/jogo/jogo';

@Component({
  selector: 'app-jogo-info',
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.css']
})

export class JogoInfoComponent implements OnInit {

  @Input() jogo: Jogo;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  voltar(): void {
  }

}
