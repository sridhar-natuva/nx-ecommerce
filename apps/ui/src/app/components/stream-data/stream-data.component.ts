import { Component, OnInit } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-stream-data',
  templateUrl: './stream-data.component.html',
  styleUrls: ['./stream-data.component.scss']
})
export class StreamDataComponent implements OnInit {

  pubnub: PubNubAngular;
  channel: string;
  messages: any[] = [];
  constructor(pubnub: PubNubAngular) {
    this.channel = 'test_channel';
    this.pubnub = pubnub;
    this.pubnub.init({
      publishKey: 'pub-c-922c16b1-729f-4d1d-b2a0-cc7a6a1e8ddb',
      subscribeKey: 'sub-c-4eb49f05-0709-4b95-88b4-43178d174d0f',
      uuid: "myUUID"
    });

    this.pubnub.subscribe({
      channels: [this.channel],
      channelGroups: ['my_channelGroup1', 'my_channelGroup2'],
      withPresence: true,
      triggerEvents: ['message', 'presence', 'status']
    });
  }
  ngOnInit() {
    setInterval(() => {
      this.pubnub.publish({
        channel: this.channel, message: `Hello World, ${Date.now()}`
      });
    }, 1000);

    this.messages = this.pubnub.getMessage(this.channel);

  }
}




