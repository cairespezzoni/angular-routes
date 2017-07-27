import { Component, Input } from '@angular/core';

import { Filme } from './filme';

@Component({
  selector: 'app-filme-info',
  templateUrl: './filme-info.component.html',
  styleUrls: ['./filme-info.component.css']
})
export class FilmeInfoComponent {

  @Input() filme: Filme;

  constructor() { }

}
