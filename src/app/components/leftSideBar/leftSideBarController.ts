import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import RewardItem from "@app/ui/models/RewardItem";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './leftSideBarView.html',
  styleUrls: ['./leftSideBarStyle.css']
})
export class LeftSideBarComponent implements OnChanges{

  @Input()
  username: string;

  @Input()
  levelCompleted: string;

  @Input()
  levelName: string;

  @Input()
  profileImage: string;

  @Input()
  rewards: RewardItem[];

  @Output()
  onProfileClick = new EventEmitter<void>();

  @Output()
  onFavoritesClick = new EventEmitter<void>();

  @Output()
  onSettingsClick = new EventEmitter<void>();

  @Output()
  onLogoutClick = new EventEmitter<void>();

  public rewardIndexes: Array<number> = [];

  menus: any[] = [
    {
      name: 'Meu Perfil',
      icon: 'account_circle',
      id: 'profile'
    },
    {
      name: 'Favoritos',
      icon: 'stars',
      id: 'favorites'
    },
    {
      name: 'Configurações',
      icon: 'settings',
      id: 'settings'
    },
    {
      name: 'Sair',
      icon: 'exit_to_app',
      id: 'logout'
    }
  ];


  ngOnChanges(): void {
    console.log(this.rewards);

    for(let idx = 0; idx < this.rewards.length; idx++){
      this.rewardIndexes.push(idx)
    }
  }

  openMenuItemClick(id:string) {
    switch(id){
      case 'profile':
        console.log("open profile click");
        this.onProfileClick.emit();
        break;
      case 'favorites':
        this.onFavoritesClick.emit();
        break;
      case 'settings':
        this.onSettingsClick.emit();
        break;
      case 'logout':
        this.onLogoutClick.emit();
        break;
      default:
        break;
    }
  }
}
