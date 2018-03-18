import {UserDataInputBoundary} from "../userData/UserDataInputBoundary";
import {PostsOfTopicsInterestInputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {SearchInputBoundary} from "@app/useCases/search/SearchInputBoundary";

export interface HomeInputBoundary extends UserDataInputBoundary, PostsOfTopicsInterestInputBoundary, SearchInputBoundary{}
