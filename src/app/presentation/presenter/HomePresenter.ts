import {GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseHandler} from "@app/interaction/GetTopicsInterestRespondeHandler";
import {PresenterContract} from "@app/presentation/presenter/PresenterContract";

export interface HomePresenter extends GetUserDataResponseHandler,
  GetTopicsInterestResponseHandler, PresenterContract {}
