import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './leftSideBarView.html',
  styleUrls: ['./leftSideBarStyle.css']
})
export class LeftSideBarComponent {
  menus = [
    {
      name: 'Meu Perfil',
      icon: 'account_circle',
    },
    {
      name: 'Configurações',
      icon: 'settings',
    },
    {
      name: 'Favoritos',
      icon: 'stars',
    }
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
}
