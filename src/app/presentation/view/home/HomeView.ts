import UsuarioViewModel from '../../model/UsuarioViewModel';


export interface HomeView {
  setDadosUsuario(usuario : UsuarioViewModel);
  getDadosUsuario(): UsuarioViewModel;
}
