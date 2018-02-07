import {GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import {GetTopicsInterestResponseHandler} from "@app/interaction/GetTopicsInterestRespondeHandler";

export interface HomePresenter extends GetUserDataResponseHandler,
  GetTopicsInterestResponseHandler {}
