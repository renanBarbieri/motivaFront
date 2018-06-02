import PostRepository from "app/data/post/PostRepository";
import {Injectable} from "@angular/core";
import Post from "app/entity/Post";
import PostItem from "@app/ui/models/PostItem";
import AuthRepository from "@app/data/auth/AuthRepository";
import {ListPostsInputBoundary, ListPostsInputModel} from "@app/useCases/listPosts/ListPostsInputBoundary";
import {ListPostsOutputBoundary, ListPostsOutputModel} from "@app/useCases/listPosts/ListPostsOutputBoundary";

@Injectable()
export default class ListPostsUseCase implements ListPostsInputBoundary {
  constructor(private postRepository: PostRepository, private authRepository: AuthRepository) {}


  async getUserPosts(requestData: ListPostsInputModel, presenter: ListPostsOutputBoundary) {

  }

  async getTagPosts(requestData: ListPostsInputModel, presenter: ListPostsOutputBoundary) {
    let responseData: ListPostsOutputModel = new ListPostsOutputModel();
    try {
      let tokenKey = await this.authRepository.getKey();

      const posts: Post[] = await this.postRepository.getPostsFromTag(tokenKey, requestData.tag);

      responseData.posts = posts.map(function (it) {
        let cardPost = new PostItem();
        cardPost.articleImage = it.headerImage;
        cardPost.authorImage = it.owner.avatar;
        cardPost.authorId = it.owner.id;
        cardPost.entityReference = it.id;
        cardPost.author = it.owner.username;
        cardPost.title = it.title;
        cardPost.views = it.favorites;
        cardPost.likes = it.likes;
        cardPost.publishDate = it.publishDate.toLocaleDateString();
        return cardPost;
      });
      presenter.onListPostsSuccess(responseData);
    }
    catch (err) {
      presenter.onListPostsError(err)
    }
  }
}
