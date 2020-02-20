import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { ChannelNewComponent } from './channel-new/channel-new.component';
import { ChannelService } from './channel.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    ChannelListComponent, 
    ChannelDetailsComponent, 
    ChannelNewComponent, 
    MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ChannelService,
     MessageService
    ]
})
export class AppModule { }
