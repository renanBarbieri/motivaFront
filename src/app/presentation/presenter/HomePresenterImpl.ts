import { HomeView } from '../view/home/HomeView';
import UsuarioViewMapper from '../model/mapper/UsuarioViewMapper';
import {GetDadosUsuarioInteractor} from "../../interaction/GetDadosUsuarioInteractor";
import {HomePresenter} from "./HomePresenter";
import GetDadosUsuarioInteractorImpl from "../../interaction/GetDadosUsuarioInteractorImpl";
import UsuarioViewModel from "../model/UsuarioViewModel";


export default class HomePresenterImpl implements HomePresenter{

  private view: HomeView;
  private getDadosUsuarioInteractor: GetDadosUsuarioInteractor;
  private usuarioViewMapper: UsuarioViewMapper;

  constructor(){
    this.getDadosUsuarioInteractor = new GetDadosUsuarioInteractorImpl();
    this.usuarioViewMapper = new UsuarioViewMapper();
  }

  setView(view: HomeView) {
    this.view = view;
  }

  async getDadosUsuario() {

    let requestData = new GetDadosUsuarioInteractor.RequestData();
    requestData.idUsuario = "fodase";

    let response: GetDadosUsuarioInteractor.ResponseData
      = await this.getDadosUsuarioInteractor.interact(requestData);
    const usuarioView: UsuarioViewModel = this.usuarioViewMapper.toOther(response.usuario);

    this.view.setDadosUsuario(usuarioView);

    // this.getDadosUsuarioInteractor.interact(requestData).then( (response: GetDadosUsuarioInteractor.ResponseData) => {
    //   const usuarioView: UsuarioViewModel = this.usuarioViewMapper.toOther(response.usuario);
    //
    //   this.view.setDadosUsuarioPerfilLateral(usuarioView);
    // });
  }
}
