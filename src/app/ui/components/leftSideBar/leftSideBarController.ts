import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './leftSideBarView.html',
  styleUrls: ['./leftSideBarStyle.css']
})
export class LeftSideBarComponent{

  @Input()
  username: string;

  @Input()
  levelCompleted: string;

  @Input()
  levelName: string;

  @Input()
  profileImage: string;

  menus: any[] = [
    {
      name: 'Meu Perfil',
      icon: 'account_circle',
    },
    {
      name: 'Favoritos',
      icon: 'stars',
    },
    {
      name: 'Configurações',
      icon: 'settings',
    }
  ];
}
