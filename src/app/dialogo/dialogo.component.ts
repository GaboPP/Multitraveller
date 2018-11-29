import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  @Input() chatMessage:any;
  userName: string;
  messageContent: string;
  isOwnMessage: boolean;
  timeStamp: Date = new Date();

  constructor() {}
  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.text;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.user;
    console.log(this.chatMessage);
    this.isOwnMessage = this.chatMessage.mine;
  }
}
