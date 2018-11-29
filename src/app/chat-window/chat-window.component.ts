import { Component, OnInit,ViewChild } from '@angular/core';
import {FeedComponent} from '../feed/feed.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  usuario;
  @ViewChild(FeedComponent) feed: FeedComponent;  
  constructor() {}
  getmsj(mensaje){
    this.feed.showmessages(mensaje);
  }

  ngOnInit() {
  }

}
