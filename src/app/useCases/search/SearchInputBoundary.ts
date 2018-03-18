import {SearchOutputBoundary} from "@app/useCases/search/SearchOutputBoundary";

export interface SearchInputBoundary {
  searchInput(input: string, outputBoundary: SearchOutputBoundary);
}
