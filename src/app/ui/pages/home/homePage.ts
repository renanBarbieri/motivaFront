import {Component, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";
import {HomeUiView} from "@app/presentation/view/HomeUIView";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css'],
  providers: [HomePresenterImpl]
})
export class HomeComponent implements OnInit, HomeUiView{

  homeViewModel: HomeViewModel;

  constructor(private homePresenter: HomePresenterImpl){
    this.homeViewModel = new HomeViewModel();
  }

  ngOnInit(){
    this.homePresenter.onViewInit(this)
  }

  updateViewModel(homeViewModel: HomeViewModel) {
  }

  getViewModel(): HomeViewModel {
    return this.homeViewModel;
  }

  showErrorAlert(message: String) {
  }
}
