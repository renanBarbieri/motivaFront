import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {PostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import {SearchOutputBoundary} from "@app/useCases/search/SearchOutputBoundary";

export interface HomeOutputBoundary extends UserDataOutputBoundary,
  PostsOfTopicsInterestOutputBoundary, SearchOutputBoundary {}
