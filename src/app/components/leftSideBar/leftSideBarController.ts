import {Component, OnInit} from '@angular/core';
import HomeView from "../../../app3/presentation/view/HomeView";
import HomeController from "../../../app3/presentation/controller/HomeController";
import HomePresenter from "../../../app3/presentation/presenter/HomePresenter";
import HomeViewModel from "../../../app3/presentation/viewmodel/HomeViewModel";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './leftSideBarView.html',
  styleUrls: ['./leftSideBarStyle.css']
})
export class LeftSideBarComponent implements OnInit{
  private homeView: HomeView;
  private homeController: HomeController;
  private homePresenter: HomePresenter;
  
  homeViewModel: HomeViewModel;
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

  constructor(){
    this.homeView = new HomeView();
    this.homePresenter = new HomePresenter(this.homeView);
    this.homeController = new HomeController(this.homePresenter);
    this.homeViewModel = this.homeView.homeViewModel;
  }

  ngOnInit(){
    try {
      this.homeController.getDadosUsuario();
    } catch (err){
      console.log(err);
    }
  }
}
