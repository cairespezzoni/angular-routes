import { Injectable } from '@angular/core';

import { Filme } from 'app/filme/filme';
import { FILMES } from 'app/filme/mock-filmes';

@Injectable()
export class FilmeService {

  getFilmes(): Promise<Filme[]> {
    return Promise.resolve(FILMES);
  }

  getFilme(id: number): Promise<Filme> {
    return this.getFilmes()
              .then(filmes => filmes.find(filme => filme.id === id));
  }

  constructor() { }

}
