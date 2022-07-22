import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogPostTestComponent } from './components/posts/blog-post-test/blog-post-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogPostTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
