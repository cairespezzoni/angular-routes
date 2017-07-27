import { Component, Input, OnInit } from '@angular/core';

import { Filme } from 'app/filme/filme';

@Component({
  selector: 'app-filme-info',
  templateUrl: './filme-info.component.html',
  styleUrls: ['./filme-info.component.css']
})

export class FilmeInfoComponent implements OnInit {

  @Input() filme: Filme;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  voltar(): void {
  }

}
