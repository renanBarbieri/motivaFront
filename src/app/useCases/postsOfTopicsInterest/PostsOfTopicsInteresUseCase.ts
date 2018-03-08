import {
  GetPostsOfTopicsInterestInputBoundary,
  GetPostsOfTopicsInterestInputModel
} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestInputBoundary";
import {
  GetPostsOfTopicsInterestOutputBoundary,
  GetPostsOfTopicsInterestOutputModel
} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestOutputBoundary";
import PostRepository from "app/data/repository/PostRepository";
import {Injectable} from "@angular/core";
import Post from "app/entity/Post";

@Injectable()
export default class PostsOfTopicsInterestUseCase implements GetPostsOfTopicsInterestInputBoundary{
  constructor(private postRepository: PostRepository){}

  async getTopics(requestData: GetPostsOfTopicsInterestInputModel, presenter: GetPostsOfTopicsInterestOutputBoundary) {

    let responseData: GetPostsOfTopicsInterestOutputModel = new GetPostsOfTopicsInterestOutputModel();
    try{
      responseData.tagPostsMap = new Map();

      let tagsCount = requestData.tags.size;

      requestData.tags.forEach(async(value, key) => {
         const posts: Post[] = await this.postRepository.getPostsFromTag(key.toString());
         let postsNames = Array<string>();
         for(let post of posts){
           postsNames.push(post.title)
         }
         responseData.tagPostsMap.set(value, postsNames);
         presenter.onGetPostsOfTopicsInterestSuccess(responseData);
      });
    }
    catch (err){
      presenter.onGetPostsOfTopicsInterestError(err)
    }
  }
}
