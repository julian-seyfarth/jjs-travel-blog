import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LightgalleryModule } from 'lightgallery/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JulyTwentyTwoComponent } from './components/posts/july-twenty-two/july-twenty-two.component';
import { JulyThirtyComponent } from './components/posts/july-thirty/july-thirty.component';
import { TestComponentComponent } from './components/test/test-component/test-component.component';
import { AugustTwoComponent } from './components/posts/august-two/august-two.component';
import { AugustSixComponent } from './components/posts/august-six/august-six.component';
import { AugustSevenComponent } from './components/posts/august-seven/august-seven.component';
import { PostBaseComponentComponent } from './components/posts/post-base-component/post-base-component.component';
import { AugustTwentyFiveComponent } from './components/posts/august-twenty-five/august-twenty-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JulyTwentyTwoComponent,
    JulyThirtyComponent,
    TestComponentComponent,
    AugustTwoComponent,
    AugustSixComponent,
    AugustSevenComponent,
    PostBaseComponentComponent,
    AugustTwentyFiveComponent
  ],
  imports: [
    BrowserModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
