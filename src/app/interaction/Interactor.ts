
import RequestData = Interactor.RequestData;
import ResponseData = Interactor.ResponseData;

export interface Interactor<T extends RequestData, U extends ResponseData>{
  interact(requestData: T): Promise<U>;
}

export namespace Interactor{
  export interface RequestData{}
  export interface ResponseData{}
}
