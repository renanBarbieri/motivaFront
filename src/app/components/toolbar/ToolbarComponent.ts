import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToolbarState} from "@app/components/toolbar/TollbarState";
import {ScreenState} from "@app/ui/ScreenState";

@Component({
  selector: 'app-toolbar',
  templateUrl: './ToolbarView.html',
  styleUrls: ['./ToolbarStyle.css']
})
export class ToolbarComponent {

  public thisToolbarState = ToolbarState;

  @Input() previousSearch = "";
  @Input() toolbarState:ToolbarState = ToolbarState.ALL_ITEMS;

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
