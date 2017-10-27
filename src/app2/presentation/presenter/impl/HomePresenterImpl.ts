import {HomePresenter} from "../HomePresenter";
import HomeView from "../../view/HomeView";
import HomeViewModel, {HomeViewModelUsuario} from "../../model/HomeViewModel";

export default class HomePresenterImpl implements HomePresenter{
  
  private view: HomeView;

  setView(view: HomeView) {
    this.view = view;
  }
  
  setDadosUsuario(usuario: HomeViewModelUsuario) {
    let homeViewModel: HomeViewModel = this.view.homeViewModel;
    
    homeViewModel.usuario.username = usuario.username;
    
    this.view.updateViewModel(homeViewModel);
  }
}
