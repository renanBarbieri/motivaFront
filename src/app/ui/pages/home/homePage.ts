import {Component, Inject, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import {HomeUiView} from "@app/presentation/view/HomeUIView";
import HomeController from "@app/presentation/controller/HomeController";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css'],
  providers: [HomeController, HomePresenterImpl, HomeUseCaseImpl]
})
export class HomeComponent implements OnInit, HomeUiView{

  homeViewModel: HomeViewModel;

  constructor(
      @Inject(HomePresenterImpl) private homePresenter,
      @Inject(HomeController) private homeController){
    this.homeViewModel = new HomeViewModel();
  }

  ngOnInit(){
    this.homePresenter.onViewInit(this);
    this.homeController.onViewInit(this.homePresenter)
  }

  updateViewModel(homeViewModel: HomeViewModel) {
  }

  getViewModel(): HomeViewModel {
    return this.homeViewModel;
  }

  showErrorAlert(message: String) {
  }
}
