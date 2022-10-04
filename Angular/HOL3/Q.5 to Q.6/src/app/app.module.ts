import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHelloUserComponent } from './app-hello-user/app-hello-user.component';

@NgModule({
  declarations: [AppComponent, AppHelloUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
