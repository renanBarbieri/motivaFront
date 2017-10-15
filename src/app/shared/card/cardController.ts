import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cardView.html',
  styleUrls: ['./cardStyle.css']
})
export class CardComponent {
  thumbnail = 'https://source.unsplash.com/random/800x600';
  avatar = 'https://source.unsplash.com/random/200x200';
  title = 'Título do artigo';
  subtitle = 'por João da Silva';
  starCount = 2;
  favCount = 5;
  actionName = '15/10/2017';
}
