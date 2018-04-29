import {Component, Input} from '@angular/core';

@Component({
  selector: 'profile-pic',
  templateUrl: './ProfilePicView.html',
  styleUrls: ['./ProfilePicStyle.css']
})
export class ProfilePicComponent {
  @Input()
  avatar;

  @Input()
  name;

}
