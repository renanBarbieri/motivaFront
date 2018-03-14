import {UIContract} from "app/useCases/UIContract";

export interface SearchUiView extends UIContract{

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>);

}
