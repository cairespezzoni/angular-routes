import { Component, OnInit } from '@angular/core';

import { Filme } from './filme';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Locadora';
  filmes: Filme[];
  filmeSelecionado: Filme;

  constructor(private filmeService: FilmeService) { }

  getFilmes(): void {
    this.filmeService.getFilmes().then(filmes => this.filmes = filmes);
  }

  ngOnInit(): void {
    this.getFilmes();
  }

  onSelect(filme: Filme): void {
    this.filmeSelecionado = filme;
  }
}
