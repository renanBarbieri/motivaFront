import {Component, Input, OnInit} from '@angular/core';
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

@Component({
  selector: 'app-topic-articles',
  templateUrl: './topicArticlesView.html',
  styleUrls: ['./topicArticlesStyle.css']
})
export class TopicArticlesComponent implements OnInit{
  @Input()
  topicName: string;

  @Input()
  articles: CardViewModel[];

  public articleIndexes: Array<number> = [];

  ngOnInit(): void {
    for(let idx = 0; idx < this.articles.length; idx++){
      this.articleIndexes.push(idx)
    }
  }
}
