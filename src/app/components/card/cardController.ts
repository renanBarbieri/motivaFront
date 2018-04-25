import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cardView.html',
  styleUrls: ['./cardStyle.css']
})
export class CardComponent {
  @Input()
  thumbnail;

  @Input()
  avatar;

  @Input()
  subtitle;

  @Input()
  starCount;

  @Input()
  favCount;

  @Input()
  date;

  @Input()
  title;

}
