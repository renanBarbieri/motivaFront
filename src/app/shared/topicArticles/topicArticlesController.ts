import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-articles',
  templateUrl: './topicArticlesView.html',
  styleUrls: ['./topicArticlesStyle.css']
})
export class TopicArticlesComponent {
  topicName = 'Cálculo Numérico';
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
