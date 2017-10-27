import HomeViewModel from "../model/HomeViewModel";

export default class HomeView{

  private _homeViewModel: HomeViewModel;

  constructor(){
    this._homeViewModel = new HomeViewModel();
  }
  
  get homeViewModel(): HomeViewModel {
    return this._homeViewModel;
  }

  updateViewModel(viewModel: HomeViewModel) {
    this._homeViewModel = viewModel;
  }
  //
  // getDadosUsuario(): UsuarioViewModel {
  //   return this.usuarioViewModel;
  // }
}
