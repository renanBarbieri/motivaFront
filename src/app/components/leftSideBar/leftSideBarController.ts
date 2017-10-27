import {Component, OnInit} from '@angular/core';
import HomeView from "../../../app2/presentation/view/HomeView";
import HomeViewModel from "../../../app2/presentation/model/HomeViewModel";
import HomeController from "../../../app2/presentation/controller/HomeController";
import {HomePresenter} from "../../../app2/presentation/presenter/HomePresenter";
import HomePresenterImpl from "../../../app2/presentation/presenter/impl/HomePresenterImpl";

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
    this.homeViewModel = this.homeView.homeViewModel;
    
    this.homePresenter = new HomePresenterImpl();
    this.homePresenter.setView(this.homeView);
    
    this.homeController = new HomeController();
    this.homeController.setPresenter(this.homePresenter);
  }

  ngOnInit(){
    try {
      this.homeController.getDadosUsuario();
    } catch (err){
      console.log(err);
    }
    //   .then(() => {
    //   this.usuario = this.homeViewModel.usuario;
    // });
  }
}
