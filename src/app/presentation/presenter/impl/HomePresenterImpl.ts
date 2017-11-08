import HomeView from "../../view/HomeView";
import {GetDadosUsuarioResponseData} from "../../../interaction/GetDadosUsuarioOutputBoundary";
import HomeViewModel from "../../viewmodel/HomeViewModel";
import {HomePresenter} from "../HomePresenter";

export default class HomePresenterImpl implements HomePresenter{
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
