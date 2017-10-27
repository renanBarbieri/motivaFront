import UsuarioViewModel from '../../model/UsuarioViewModel';
import {HomeView} from "./HomeView";


export default class HomeViewImpl implements HomeView{

  private usuarioViewModel: UsuarioViewModel;

  constructor(){
    this.usuarioViewModel = new UsuarioViewModel();
  }

  setDadosUsuario(usuario: UsuarioViewModel) {
    this.usuarioViewModel = usuario;
  }

  getDadosUsuario(): UsuarioViewModel {
    return this.usuarioViewModel;
  }
}
