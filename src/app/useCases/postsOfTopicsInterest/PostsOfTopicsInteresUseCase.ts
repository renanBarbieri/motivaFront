import {
  GetPostsOfTopicsInterestInputBoundary,
  GetPostsOfTopicsInterestInputModel
} from "app/useCases/postsOfTopicsInterest/GetPostsOfTopicsInterestInputBoundary";
import {
  GetPostsOfTopicsInterestOutputBoundary,
  GetPostsOfTopicsInterestOutputModel, PostCardModel
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
         presenter.onGetPostsOfTopicsInterestSuccess(responseData);
      });
    }
    catch (err){
      presenter.onGetPostsOfTopicsInterestError(err)
    }
  }
}
