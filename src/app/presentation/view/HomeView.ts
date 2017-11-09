import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";

export default class HomeView{
  
  private _homeViewModel: HomeViewModel;
  private _error: boolean;
  
  constructor(){
    this._homeViewModel = new HomeViewModel();
    this._error = false;
  }
  
  get homeViewModel(): HomeViewModel {
    return this._homeViewModel;
  }
  
  updateViewModel(viewModel: HomeViewModel) {
    this._homeViewModel = viewModel;
  }
  
  showErrorAlert(message) {
    this._error = true;
    //TODO: implement
  }
}
