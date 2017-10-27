import {GetDadosUsuarioInteractor} from "../../core/interaction/interactor/GetDadosUsuarioInteractor";
import GetDadosUsuarioInteractorImpl from "../../core/interaction/impl/GetDadosUsuarioInteractorImpl";
import {HomePresenter} from "../presenter/HomePresenter";
import {HomeViewModelUsuario} from "../model/HomeViewModel";

export default class HomeController{
  
  private homePresenter: HomePresenter;
  private getDadosUsuarioInteractor: GetDadosUsuarioInteractor;
  
  constructor(){
    this.getDadosUsuarioInteractor = new GetDadosUsuarioInteractorImpl();
  }
  
  setPresenter(presenter: HomePresenter){
    this.homePresenter = presenter;
  }
  
  getDadosUsuario(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        let requestData = new GetDadosUsuarioInteractor.RequestData();
        requestData.idUsuario = "fodase";
  
        let responseData: GetDadosUsuarioInteractor.ResponseData = await this.getDadosUsuarioInteractor.interact(requestData);
        
        let usuarioView: HomeViewModelUsuario = {
          username: responseData.username
        };
        
        this.homePresenter.setDadosUsuario(usuarioView);
        resolve();
      }catch(err){
        reject(err);
      }
    });
  }
  
}
