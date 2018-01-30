import {GetTopicosInteresseOutputBoundary} from "app/interaction/GetTopicosInteresseOutputBoundary";
import {GetDadosUsuarioOutputBoundary} from "app/interaction/GetDadosUsuarioOutputBoundary";
import HomeViewModel from "app/presentation/viewmodel/HomeViewModel";
import {UIContract} from "@app/presentation/contracts/UIContract";

export interface HomeUiContract extends UIContract{

  updateViewModel(homeViewModel: HomeViewModel);

  getViewModel(): HomeViewModel;

}

export interface HomePresenterContract extends
GetDadosUsuarioOutputBoundary, GetTopicosInteresseOutputBoundary{
  onViewInit();
}
