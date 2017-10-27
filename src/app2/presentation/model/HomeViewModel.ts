
export default class HomeViewModel{
  
  usuario: HomeViewModelUsuario = {
    username: ""
  };
}

export type HomeViewModelUsuario = { //TODO: melhorar
  username: string;
}
