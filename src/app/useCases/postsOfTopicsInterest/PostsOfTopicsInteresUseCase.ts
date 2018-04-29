import {
  PostsOfTopicsInterestInputBoundary,
  PostsOfTopicsInterestInputModel
} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {
  GetPostsOfTopicsInterestOutputModel,
  PostsOfTopicsInterestOutputBoundary
} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import PostRepository from "app/data/post/PostRepository";
import {Injectable} from "@angular/core";
import Post from "app/entity/Post";
import PostItem from "@app/ui/models/PostItem";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class PostsOfTopicsInterestUseCase implements PostsOfTopicsInterestInputBoundary{
  constructor(private postRepository: PostRepository, private authRepository: AuthRepository){}

  async getTopics(requestData: PostsOfTopicsInterestInputModel, presenter: PostsOfTopicsInterestOutputBoundary) {

    let responseData: GetPostsOfTopicsInterestOutputModel = new GetPostsOfTopicsInterestOutputModel();
    try{
      responseData.tagPostsMap = new Map();
      let tokenKey = await this.authRepository.getKey();

      requestData.tags.forEach(async(value, key) => {
         const posts: Post[] = await this.postRepository.getPostsFromTag(tokenKey, key.toString());

        let postsCards: Array<PostItem> = posts.map(function (it) {
           let cardPost = new PostItem();
           cardPost.articleImage = it.headerImage;
           cardPost.authorImage = it.owner.avatar;
           cardPost.author = it.owner.username;
           cardPost.title = it.title;
           cardPost.views = it.favorites;
           cardPost.likes = it.likes;
           cardPost.publishDate = it.publishDate.toLocaleDateString();
           return cardPost;
         });

         responseData.tagPostsMap.set(value, postsCards);
         presenter.onPostsOfTopicsInterestSuccess(responseData);
      });
    }
    catch (err){
      presenter.onPostsOfTopicsInterestError(err)
    }
  }
}
