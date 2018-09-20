import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostsService } from './services/posts.service';

import { AppComponent } from './app.component';
import { DemoComponent } from './componentes/demo/demo.component';
import { HttpClientModule } from '@angular/common/http/'
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
