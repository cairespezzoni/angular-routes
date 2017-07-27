import { Component, OnInit } from '@angular/core';

import { Filme } from 'app/filme/filme';
import { FilmeService } from 'app/filme/service/filme.service';

@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})

export class FilmeListaComponent implements OnInit {

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
