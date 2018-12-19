import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/services/chat.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
