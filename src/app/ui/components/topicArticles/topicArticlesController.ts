import {Component, Input} from '@angular/core';
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

@Component({
  selector: 'app-topic-articles',
  templateUrl: './topicArticlesView.html',
  styleUrls: ['./topicArticlesStyle.css']
})
export class TopicArticlesComponent {
  @Input()
  topicName: string;
  // @Input()
  // articles: CardViewModel[];
}
