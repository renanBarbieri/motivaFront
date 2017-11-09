import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import HomeView from "@app/presentation/view/HomeView";
import {GetDadosUsuarioResponseData} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";

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
