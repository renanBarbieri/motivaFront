import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'user-comment',
  templateUrl: './commentView.html',
  styleUrls: ['./commentStyle.css']
})
export class CommentComponent {
  @Input()
  avatar;

  @Input()
  text;

  @Input()
  date;

  @Input()
  username;

  @Output()
  onCardClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(){
    this.onCardClick.emit();
  }

}
