import {UIContract} from "@app/presentation/view/UIContract";

export interface PresenterContract{
  onViewInit(view: UIContract);
}
