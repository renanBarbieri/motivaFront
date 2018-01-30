import {GetTopicsInterestResponseHandler} from "app/interaction/GetTopicsInterestRespondeHandler";
import HomeViewModel from "app/presentation/viewmodel/HomeViewModel";
import {UIContract} from "@app/presentation/contracts/UIContract";
import {GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import {PresenterContract} from "@app/presentation/contracts/PresenterContract";

export interface HomeUiContract extends UIContract{

  updateViewModel(homeViewModel: HomeViewModel);

  getViewModel(): HomeViewModel;

}

export interface HomePresenterContract extends
  GetUserDataResponseHandler,
  GetTopicsInterestResponseHandler,
  PresenterContract{
}
