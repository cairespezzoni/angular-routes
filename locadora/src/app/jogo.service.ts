import { Injectable } from '@angular/core';

import { Jogo } from './jogo';
import { JOGOS } from './mock-jogos';

@Injectable()
export class JogoService {

  getJogos(): Promise<Jogo[]> {
    return Promise.resolve(JOGOS);
  }

  getJogosLento(): Promise<Jogo[]> {
    return new Promise(resolve => {
      // Simulando a latência do servidor
      setTimeout(() => resolve(this.getJogos()), 2000);
    });
  }

  constructor() { }

}
