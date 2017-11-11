import {GetDadosUsuarioOutputBoundary} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import {GetTopicosInteresseOutputBoundary} from "@app/interaction/GetTopicosInteresseOutputBoundary";

export interface HomePresenter extends
  GetDadosUsuarioOutputBoundary, GetTopicosInteresseOutputBoundary{}
