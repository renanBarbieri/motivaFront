import {Component, OnInit} from '@angular/core';
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";
import {HomePresenterContract, HomeUiContract} from "@app/presentation/contracts/HomeContract";

@Component({
  selector: 'app-home',
  templateUrl: './homeView.html',
  styleUrls: ['./homeStyle.css']
})
export class HomeComponent implements OnInit, HomeUiContract{

  private homePresenter: HomePresenterContract;
  private homeViewModel: HomeViewModel;

  constructor(){
    this.homeViewModel = new HomeViewModel();
    this.homePresenter = new HomePresenterImpl(this);
  }

  ngOnInit(){
    this.homePresenter.onViewInit()
  }

  updateViewModel(homeViewModel: HomeViewModel) {
  }

  getViewModel(): HomeViewModel {
    return this.homeViewModel;
  }

  showErrorAlert(message: String) {
  }
}
