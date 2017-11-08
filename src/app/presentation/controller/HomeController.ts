import {GetDadosUsuarioRequestData} from "../../interaction/GetDadosUsuarioInputBoundary";
import {HomeUseCase} from "../../interaction/HomeUseCase";
import HomeUseCaseImpl from "../../interaction/impl/HomeUseCaseImpl";
import {HomePresenter} from "../presenter/HomePresenter";

export default class HomeController{
  
  private homePresenter: HomePresenter;
  private homeUseCase: HomeUseCase;
  
  constructor(presenter: HomePresenter){
    this.homePresenter = presenter;
    this.homeUseCase = new HomeUseCaseImpl();
  }
  
  getDadosUsuario(){
    let requestData = new GetDadosUsuarioRequestData();
    requestData.idUsuario = "id";
    
    this.homeUseCase.getUsuario(requestData, this.homePresenter);
  }
}

