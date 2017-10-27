import {Component, OnInit} from '@angular/core';
import HomePresenterImpl from "../../presentation/presenter/HomePresenterImpl";
import HomeViewImpl from "../../presentation/view/home/HomeViewImpl";
import UsuarioViewModel from "../../presentation/model/UsuarioViewModel";
import {HomeView} from "../../presentation/view/home/HomeView";
import {HomePresenter} from "../../presentation/presenter/HomePresenter";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './leftSideBarView.html',
  styleUrls: ['./leftSideBarStyle.css']
})
export class LeftSideBarComponent implements OnInit{

  private homeView: HomeView;
  private homePresenter: HomePresenter;
  private usuario: UsuarioViewModel;
  private menus = [
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
    this.homeView = new HomeViewImpl();
    this.homePresenter = new HomePresenterImpl();
    this.homePresenter.setView(this.homeView);
  }

  ngOnInit(){
    this.homePresenter.getDadosUsuario().then(() => {
      this.usuario = this.homeView.getDadosUsuario();
    });
  }
}
