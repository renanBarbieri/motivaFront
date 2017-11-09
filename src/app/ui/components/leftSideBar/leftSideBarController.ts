import {Component, OnInit} from '@angular/core';
import HomeView from "@app/presentation/view/HomeView";
import HomeController from "@app/presentation/controller/HomeController";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";

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
    this.homePresenter = new HomePresenterImpl(this.homeView);
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
