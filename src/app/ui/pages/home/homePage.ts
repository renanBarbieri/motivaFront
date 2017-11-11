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

  homeViewModel: HomeViewModel;

  constructor(){
    this.homeView = new HomeView();
    this.homeViewModel = this.homeView.homeViewModel;
  }

  ngOnInit(){
    try {
      this.homeView.onViewInit()
    } catch (err){
      console.log(err);
    }
  }

  topics(): IterableIterator<string>{
    return this.homeViewModel.topicsList.keys()
  }


}
