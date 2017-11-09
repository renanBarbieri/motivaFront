import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-topic-articles',
  templateUrl: './topicArticlesView.html',
  styleUrls: ['./topicArticlesStyle.css']
})
export class TopicArticlesComponent {
  @Input()
  topicName: string;
  articles: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    }
  ];
}
