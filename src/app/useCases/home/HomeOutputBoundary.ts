import {GetUserDataOutputBoundary} from "app/useCases/userData/GetUserDataOutputBoundary";
import {GetPostsOfTopicsInterestOutputBoundary} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";

export interface HomeOutputBoundary extends GetUserDataOutputBoundary,
  GetPostsOfTopicsInterestOutputBoundary
{}
