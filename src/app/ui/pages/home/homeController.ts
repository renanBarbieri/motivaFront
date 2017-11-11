import {Component, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import HomeController from "@app/presentation/controller/HomeController";
import HomeView from "@app/presentation/view/HomeView";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css']
})
export class HomeComponent implements OnInit{
  private homeView: HomeView;
  private homeController: HomeController;
  private homePresenter: HomePresenter;

  homeViewModel: HomeViewModel;

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
