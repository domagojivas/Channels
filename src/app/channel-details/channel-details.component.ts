import { Component, OnInit, Input } from '@angular/core';
import { Channel } from '../channel';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { ChannelService } from '../channel.service';
import { CHANNELS } from '../mock-channels';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {

  @Input() channel: Channel;
  //constructor( private channelService: ChannelService) {}
  constructor( ) {}
  
  ngOnInit() {  }

  delete(){
   //channelList.deleteChannel(this.channel);
   window.alert("Deleted channel");
 }

  //Should show "channel-new" (Create a channel) and populate it with this.channel info
  edit(){
    //channelList.editChannel(this.channel)
 }
    /*ngOnInit() {
    this.channelService.getChannels();
  }*/

/*
  edit(channel: Channel): void {
    this.channel = this.channel.filter(h => h !== channel);
    this.channelService.deleteHero(channel).subscribe();
  }

  delete(channel: Channel): void {
    this.channel = this.channel.filter(h => h !== channel);
    this.channelService.deleteHero(channel).subscribe();
  }*/

}