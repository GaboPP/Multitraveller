import { Component, OnInit ,ViewChild} from '@angular/core';
import { DialogoComponent } from '../dialogo/dialogo.component';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed;
  @ViewChild(DialogoComponent) dialogo: DialogoComponent; 
  constructor() { }
  
  public showmessages(mnsj){
    this.feed=mnsj;
    console.log(this.feed);
    }

  ngOnInit() {
  }

}
