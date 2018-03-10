import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbarView.html',
  styleUrls: ['./toolbarStyle.css']
})
export class ToolbarComponent {
  title = 'Toolbar';
  value = "";
}
