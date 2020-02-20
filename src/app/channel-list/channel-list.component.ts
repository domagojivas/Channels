import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { CHANNELS } from '../mock-channels';
import { FormGroup, FormControl } from '@angular/forms';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channelList=this;

  channels = CHANNELS;
  //channels: Channel[];
  openform = false;

  constructor(){};//private channelService: ChannelService ) { }
   //constructor(private channelService: ChannelService ) { }

  ngOnInit() {
    this.getChannels();
  }

  createChannel(){
    if(this.openform!=true)
      this.openform=true;  
    else
      this.openform=false;
    
  }

  closeCreateChannel(){
    this.openform=false;  
  }

  getChannels():void{
    this.channels=this.channelService.getChannels();
   // this.channelService.getChannels().subscribe(channels => this.channels = channels);
  }

  addChannel(channel: Channel){
    this.channels.push(channel);
    window.alert("Channal added");
  }

  deleteChannel(channel: Channel){
    this.channels.forEach( (item, index) => {
     if(item === channel) this.channels.splice(index,1);
   });
  }

}