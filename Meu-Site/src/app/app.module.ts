import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//pages
import { HeaderComponent } from './components/pages/header/header.component';
import { CurriculoComponent } from './components/pages/header/curriculo/curriculo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurriculoComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
