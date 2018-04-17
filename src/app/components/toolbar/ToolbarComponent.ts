import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './ToolbarView.html',
  styleUrls: ['./ToolbarStyle.css']
})
export class ToolbarComponent {

  @Input() previousSearch = "";
  @Input() showGlobalActions = true;

  @Output() searchInputEvent = new EventEmitter();

  @Output() newPostClickEvent = new EventEmitter();
  @Output() homeClickEvent = new EventEmitter();
  @Output() searchClickEvent = new EventEmitter();

  searchInput(inputText: string){
    this.searchInputEvent.emit(inputText);
  }

  openSearch() {
    this.searchClickEvent.emit();
  }

  openCreatePost() {
    this.newPostClickEvent.emit();
  }

  openHome() {
    this.homeClickEvent.emit();
  }
}
