import HomeViewModel from "app/presentation/viewmodel/HomeViewModel";
import {UIContract} from "@app/presentation/view/UIContract";

export interface HomeUiView extends UIContract{

  updateViewModel(homeViewModel: HomeViewModel);

  getViewModel(): HomeViewModel;

}
