import {
  GetDadosUsuarioOutputBoundary,
  GetDadosUsuarioResponseData
} from "../../interaction/GetDadosUsuarioOutputBoundary";
import HomeView from "../view/HomeView";
import HomeViewModel from "../viewmodel/HomeViewModel";

export default class HomePresenter implements GetDadosUsuarioOutputBoundary{
  private view: HomeView;

  constructor(view: HomeView) {
    this.view = view;
  }
  
  getDadosUsuarioSuccess(responseData: GetDadosUsuarioResponseData) {
    let homeViewModel: HomeViewModel = this.view.homeViewModel;
  
    homeViewModel.username = responseData.username;
  
    this.view.updateViewModel(homeViewModel);
  }
  
  getDadosUsuarioError(errorData: any) {
    this.view.showErrorAlert(errorData.message);
  }
}
