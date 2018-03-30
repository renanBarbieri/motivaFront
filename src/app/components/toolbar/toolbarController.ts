import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbarView.html',
  styleUrls: ['./toolbarStyle.css']
})
export class ToolbarComponent {

  @Input()
  previousSearch;

  @Output() searchInputEvent = new EventEmitter();

  searchInput(inputText: string){
    this.searchInputEvent.emit(inputText);
  }
}
