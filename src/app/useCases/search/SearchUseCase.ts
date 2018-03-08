import {Injectable} from "@angular/core";
import {SearchInputBoundary} from "@app/useCases/search/SearchInputBoundary";

@Injectable()
export default class SearchUseCase implements SearchInputBoundary{

  //TODO: implementar pesquisa e modelagem
  async searchInput(input: string) {
  }
}
