import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JulyTwentyTwoComponent } from './components/posts/july-twenty-two/july-twenty-two.component';
import { JulyThirtyComponent } from './components/posts/july-thirty/july-thirty.component';
import { TestComponentComponent } from './components/test/test-component/test-component.component';
import { AugustTwoComponent } from './components/posts/august-two/august-two.component';
import { AugustSixComponent } from './components/posts/august-six/august-six.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JulyTwentyTwoComponent,
    JulyThirtyComponent,
    TestComponentComponent,
    AugustTwoComponent,
    AugustSixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
