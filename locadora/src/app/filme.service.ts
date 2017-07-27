import { Injectable } from '@angular/core';

import { Filme } from './filme';
import { FILMES } from './mock-filmes';

@Injectable()
export class FilmeService {

  getFilmes(): Promise<Filme[]> {
    return Promise.resolve(FILMES);
  }

  getFilmesLento(): Promise<Filme[]> {
    return new Promise(resolve => {
      // Simulando a latência do servidor
      setTimeout(() => resolve(this.getFilmes()), 2000);
    });
  }

  constructor() { }

}
