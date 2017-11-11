import HomeViewModel from "@app/presentation/viewmodel/HomeViewModel";
import HomeController from "@app/presentation/controller/HomeController";
import {HomePresenter} from "@app/presentation/presenter/HomePresenter";
import HomePresenterImpl from "@app/presentation/presenter/impl/HomePresenterImpl";

export default class HomeView{

  private homeController: HomeController;
  private homePresenter: HomePresenter;

  private _homeViewModel: HomeViewModel;
  private _error: boolean;

  constructor(){
    this._homeViewModel = new HomeViewModel();
    this.homePresenter = new HomePresenterImpl(this);
    this.homeController = new HomeController(this.homePresenter);
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

  /**
   * Nesta camada teriamos os métodos de lifecycle sendo criados.
   * A camada de UI serve apenas para apresentar os dados que a view disponibiliza.
   */
  onViewInit(){
    this.homeController.getDadosUsuario();
    this.homeController.getTopicosDeInteresse()
  }

  /**
   * Imaginando aqui uma possível implementação de um evento de click.
   * Este método seria chamado na camada de UI
   */
  onCreateArticleClick(){

  }
}
