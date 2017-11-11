import {GetDadosUsuarioInputBoundary} from "./GetDadosUsuarioInputBoundary";
import {GetTopicosInteresseInputBoundary} from "@app/interaction/GetTopicosInteresseInputBoundary";

export interface HomeUseCase extends GetDadosUsuarioInputBoundary, GetTopicosInteresseInputBoundary{

}
