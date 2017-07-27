import { Injectable } from '@angular/core';

import { Jogo } from 'app/jogo/jogo';
import { JOGOS } from 'app/jogo/mock-jogos';

@Injectable()
export class JogoService {

  getJogos(): Promise<Jogo[]> {
    return Promise.resolve(JOGOS);
  }

  getJogo(id: number): Promise<Jogo> {
    return this.getJogos()
              .then(jogos => jogos.find(jogo => jogo.id === id));
  }

  constructor() { }

}
