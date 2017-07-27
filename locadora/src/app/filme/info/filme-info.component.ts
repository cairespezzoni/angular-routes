import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { FilmeService } from 'app/filme/service/filme.service'
import { Filme } from 'app/filme/filme';

@Component({
  selector: 'app-filme-info',
  templateUrl: './filme-info.component.html',
  styleUrls: ['./filme-info.component.css']
})

export class FilmeInfoComponent implements OnInit {

  @Input() filme: Filme;

  constructor(
    private _filme: FilmeService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._filme.getFilme(+params.get('id')))
      .subscribe(filme => this.filme = filme);
  }

  voltar(): void {
    this._location.back();
  }

}
