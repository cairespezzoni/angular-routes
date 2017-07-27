import { Component, OnInit } from '@angular/core';

import { Jogo } from 'app/jogo/jogo';
import { JogoService } from 'app/jogo/service/jogo.service';

@Component({
  selector: 'app-jogo-lista',
  templateUrl: './jogo-lista.component.html',
  styleUrls: ['./jogo-lista.component.css']
})

export class JogoListaComponent implements OnInit {

  jogos: Jogo[];
  jogoSelecionado: Jogo;

  constructor(private jogoService: JogoService) { }

  getJogos(): void {
    this.jogoService.getJogos().then(jogos => this.jogos = jogos);
  }

  ngOnInit(): void {
    this.getJogos();
  }

  onSelect(jogo: Jogo): void {
    this.jogoSelecionado = jogo;
  }

}
