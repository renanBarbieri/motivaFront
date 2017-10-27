import { HomeView } from '../view/home/HomeView';

export interface HomePresenter {
    setView(view: HomeView);
    getDadosUsuario();
}
