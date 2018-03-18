import {Component, Input, OnChanges} from '@angular/core';
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

  public rewardIndexes: Array<number> = [];

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


  ngOnChanges(): void {
    console.log(this.rewards);

    for(let idx = 0; idx < this.rewards.length; idx++){
      this.rewardIndexes.push(idx)
    }
  }
}
