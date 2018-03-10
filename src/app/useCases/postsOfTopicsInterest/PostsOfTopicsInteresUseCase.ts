import {
  PostsOfTopicsInterestInputBoundary,
  PostsOfTopicsInterestInputModel
} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestInputBoundary";
import {
  PostsOfTopicsInterestOutputBoundary,
  GetPostsOfTopicsInterestOutputModel
} from "app/useCases/postsOfTopicsInterest/PostsOfTopicsInterestOutputBoundary";
import PostRepository from "app/data/repository/PostRepository";
import {Injectable} from "@angular/core";
import Post from "app/entity/Post";
import {PostCardModel} from "@app/useCases/postsOfTopicsInterest/PostCardModel";

@Injectable()
export default class PostsOfTopicsInterestUseCase implements PostsOfTopicsInterestInputBoundary{
  constructor(private postRepository: PostRepository){}

  async getTopics(requestData: PostsOfTopicsInterestInputModel, presenter: PostsOfTopicsInterestOutputBoundary) {

    let responseData: GetPostsOfTopicsInterestOutputModel = new GetPostsOfTopicsInterestOutputModel();
    try{
      responseData.tagPostsMap = new Map();

      let tagsCount = requestData.tags.size;

      requestData.tags.forEach(async(value, key) => {
         const posts: Post[] = await this.postRepository.getPostsFromTag(key.toString());
         let postsCards = Array<PostCardModel>();
         for(let post of posts){
           let cardPost = new PostCardModel();
           cardPost.imageThumbnail = post.headerImage;
           cardPost.userAvatar = post.owner.avatar;
           cardPost.userName = post.owner.username;
           cardPost.title = post.title;
           cardPost.subtitle = post.subtitle;
           cardPost.favs = 2;
           cardPost.stars = 5;
           cardPost.publishDate = post.publishDate.toDateString();
           postsCards.push(cardPost);
         }
         responseData.tagPostsMap.set(value, postsCards);
         presenter.onPostsOfTopicsInterestSuccess(responseData);
      });
    }
    catch (err){
      presenter.onPostsOfTopicsInterestError(err)
    }
  }
}
