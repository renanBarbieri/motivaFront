import {GetUserDataUseCase} from "./GetUserDataUseCase";
import {GetTopicsInterestUseCase} from "@app/interaction/GetTopicsInterestUseCase";

export interface HomeUseCase extends GetUserDataUseCase, GetTopicsInterestUseCase{}
