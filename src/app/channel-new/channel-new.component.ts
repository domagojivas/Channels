import { Component, OnInit, Input } from '@angular/core';
import { Channel } from '../channel';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-new',
  templateUrl: './channel-new.component.html',
  styleUrls: ['./channel-new.component.css']
})
export class ChannelNewComponent implements OnInit {
  channel: Channel;

  @Input() channelList:ChannelListComponent;

  constructor() { 
    this.channel = new Channel;
  }


  ngOnInit() {
  }


  saveChanel(){
    if(this.channel.name!=null){
      var message: string=  "name : " +this.channel.name + "\nid :"+this.channel.id+"\nUrl :"+this.channel.url;
      window.alert(message);
      this.channelList.addChannel(this.channel);
      this.channelList.closeCreateChannel();}
    else{
      window.alert("message: Name invalid.");
    }
  }

  back(){
    this.channelList.closeCreateChannel();
  }
}