import {Component, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";
import {HomeUiView} from "@app/presentation/view/HomeUIView";
import HomeController from "@app/presentation/controller/HomeController";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css'],
  providers: [HomePresenterImpl, HomeController, HomeViewModel]
})
export class HomeComponent implements OnInit, HomeUiView{

  constructor(
    private homePresenter: HomePresenterImpl,
    private homeController: HomeController,
    private homeViewModel: HomeViewModel
  ){}

  ngOnInit(){
    this.homePresenter.view = this;
    this.homeController.getUserData(this.homePresenter);
    this.homeController.getTopicsOfInterest(this.homePresenter)
  }

  updateViewModel(homeViewModel: HomeViewModel) {
  }

  getViewModel(): HomeViewModel {
    return this.homeViewModel;
  }

  showErrorAlert(message: String) {
  }
}
