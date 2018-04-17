import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './ToolbarView.html',
  styleUrls: ['./ToolbarStyle.css']
})
export class ToolbarComponent {

  @Input()
  previousSearch;

  @Output() searchInputEvent = new EventEmitter();

  @Output() newPostClickEvent = new EventEmitter();

  searchInput(inputText: string){
    this.searchInputEvent.emit(inputText);
  }

  openCreatePost() {
    this.newPostClickEvent.emit();
  }

  openHome() {

  }
}
