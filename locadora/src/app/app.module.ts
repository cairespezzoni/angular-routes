import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';

// Filme
import { FilmeListaComponent } from 'app/filme/lista/filme-lista.component';
import { FilmeInfoComponent } from 'app/filme/info/filme-info.component';
import { FilmeService } from 'app/filme/service/filme.service';

// Jogo
import { JogoListaComponent } from 'app/jogo/lista/jogo-lista.component';
import { JogoInfoComponent } from 'app/jogo/info/jogo-info.component';
import { JogoService } from 'app/jogo/service/jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmeInfoComponent,
    JogoListaComponent,
    JogoInfoComponent,
    FilmeListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FilmeService,
    JogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
