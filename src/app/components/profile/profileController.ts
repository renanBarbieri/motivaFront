import {Component, Input} from '@angular/core';

@Component({
  selector: 'profile-thumb',
  templateUrl: './profileView.html',
  styleUrls: ['./profileStyle.css']
})
export class ProfileComponent {
  @Input()
  avatar;

  @Input()
  name;

  @Input()
  id;

}
