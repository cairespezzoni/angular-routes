import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmeInfoComponent } from './filme-info.component';
import { FilmeService } from './filme.service';
import { JogoListaComponent } from './jogo-lista.component';
import { JogoInfoComponent } from './jogo-info.component';
import { JogoService } from './jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmeInfoComponent,
    JogoListaComponent,
    JogoInfoComponent
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
