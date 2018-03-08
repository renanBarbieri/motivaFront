import {GetUserDataInputBoundary} from "../userData/GetUserDataInputBoundary";
import {GetPostsOfTopicsInterestInputBoundary} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestInputBoundary";

export interface HomeInputBoundary extends GetUserDataInputBoundary, GetPostsOfTopicsInterestInputBoundary{}
