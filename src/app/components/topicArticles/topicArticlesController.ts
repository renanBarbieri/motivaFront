import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostItem from "app/ui/models/PostItem";

@Component({
  selector: 'app-topic-articles',
  templateUrl: './topicArticlesView.html',
  styleUrls: ['./topicArticlesStyle.css']
})
export class TopicArticlesComponent implements OnInit{
  @Input()
  topicName: string;

  @Input()
  articles: PostItem[];

  @Output() onCardClick = new EventEmitter();

  public articleIndexes: Array<number> = [];

  ngOnInit(): void {
    for(let idx = 0; idx < this.articles.length; idx++){
      this.articleIndexes.push(idx)
    }
  }

  onAppCardClick(postId: string, username: string) {
    this.onCardClick.emit({post: postId, username: username});
  }
}
