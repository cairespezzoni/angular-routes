import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { HomeComponent } from './home/home.component';

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
    FilmeListaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

      { path: 'filme', component: FilmeListaComponent },
      { path: 'filme/:id', component: FilmeInfoComponent },
      { path: 'filme/novo', component: FilmeInfoComponent },

      { path: 'jogo', component: JogoListaComponent },
      { path: 'jogo/id', component: JogoInfoComponent },
      { path: 'jogo/novo', component: JogoInfoComponent }
    ])
  ],
  providers: [
    FilmeService,
    JogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
