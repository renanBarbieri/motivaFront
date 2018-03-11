import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbarView.html',
  styleUrls: ['./toolbarStyle.css']
})
export class ToolbarComponent {

  @Output() searchInputEvent = new EventEmitter();

  searchInput(inputText: string){
    this.searchInputEvent.emit(inputText);
  }
}
