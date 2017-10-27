import HomeView from "../view/HomeView";
import {HomeViewModelUsuario} from "../model/HomeViewModel";

export interface HomePresenter {
    setView(view: HomeView);
    
    setDadosUsuario(usuario: HomeViewModelUsuario);
}
