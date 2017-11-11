

import {GetTopicosInteresseOutputBoundary} from "@app/interaction/GetTopicosInteresseOutputBoundary";

export interface GetTopicosInteresseInputBoundary{
  getTopicos(requestData: GetTopicosInteresseRequestData, presenter: GetTopicosInteresseOutputBoundary)
}

export class GetTopicosInteresseRequestData {
  public idUsuario: string;
}
