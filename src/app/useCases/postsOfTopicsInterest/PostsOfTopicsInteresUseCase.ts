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
import PostItem from "@app/ui/models/PostItem";

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

        let postsCards: Array<PostItem> = posts.map(function (it) {
           let cardPost = new PostItem();
           cardPost.articleImage = it.headerImage;
           cardPost.authorImage = it.owner.avatar;
           cardPost.author = it.owner.username;
           cardPost.title = it.title;
           cardPost.favorites = 2;
           cardPost.likes = 5;
           cardPost.publishDate = it.publishDate.toDateString();
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
