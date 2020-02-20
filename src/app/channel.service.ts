import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Channel } from './channel';
import { CHANNELS } from './mock-channels';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  //private channelUrl = 'api/channel';  // URL to web api
 private channelUrl = 'http://176.31.182.158:3001/channels';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


   getChannel(id: number): Observable<Channel> {
    const url = `${this.channelUrl}/${id}`;
    return this.http.get<Channel>(url).pipe(
      tap(_ => this.log(`fetched channel id=${id}`)),
      catchError(this.handleError<Channel>(`getChannel id=${id}`))
    );
  }

 getChannels():Channel[]{
     //this.messageService.add('ChannelService: fetched channel');
    return CHANNELS;
  }

  addChannel(channel: Channel){
    CHANNELS.push(channel);
  }

  editChannel(channelIn: Channel){
    for(let channel of CHANNELS){
        if(channel.id==channelIn.id)
          CHANNELS.channel=channelIn;
    }
  }

  deleteChannel(channelIn: Channel){
    for(let channel of CHANNELS){
        if(channel.id==channelIn.id)
          CHANNELS.remove(channel);
    }
  }



/*
  getChannels():Observable<Channel[]>{
     //this.messageService.add('ChannelService: fetched channel');
    return of (CHANNELS);
  }
    */


  updateById(id: number){}


/*
  deleteChannel(channel: Channel |number): Observable<Channel> {
    const id = typeof channel === 'number' ? channel : channel.id;
    const url = `${this.channelUrl}/${id}`;

    return this.http.delete<Channel>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted channel id=${id}`)),
      catchError(this.handleError<Channel>('deleteChannel'))
    );
  }*/

  








  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    private log(message: string) {
      this.messageService.add(`ChannelService: ${message}`);
    }
}
