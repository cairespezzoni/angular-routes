import { Component, Input } from '@angular/core';

import { Jogo } from 'app/jogo/jogo';

@Component({
  selector: 'app-jogo-info',
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.css']
})
export class JogoInfoComponent {

  @Input() jogo: Jogo;

  constructor() { }

}
