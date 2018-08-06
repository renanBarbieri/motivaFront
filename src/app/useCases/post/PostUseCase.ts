import {Injectable} from "@angular/core";
import PostRepository from "@app/data/post/PostRepository";
import AuthRepository from "@app/data/auth/AuthRepository";
import {PostCommentInputModel, PostInputBoundary, PostInputModel} from "@app/useCases/post/PostInputBoundary";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";
import {
  PostComment,
  PostCommentOutputBoundary,
  PostCommentOutputModel
} from "@app/useCases/post/PostCommentOutputBoundary";

@Injectable()
export default class PostUseCase implements PostInputBoundary {
  constructor(private postRepository: PostRepository,
              private authRepository: AuthRepository) {
  }


  async retrievePostData(postInputModel: PostInputModel, outputBoundary: PostOutputBoundary) {
    const outputModel: PostOutputModel = new PostOutputModel();

    try {
      const authkey = await this.authRepository.getKey();
      const post = await this.postRepository.getPost(authkey, postInputModel.username, postInputModel.postId);

      const outputTags: Array<string> = post.tags.map(it => it.name);

      outputModel.title = post.title;
      outputModel.tags = outputTags;
      outputModel.estimateTime = post.estimatedTime;
      outputModel.text = post.content;
      outputModel.bannerImage = post.headerImage;
      outputBoundary.onGetPostDataSuccess(outputModel);
    } catch (err) {
      outputBoundary.onGetPostDataError(err);
    }

  }

  async retrievePostComments(postInputModel: PostInputModel, outputBoundary: PostCommentOutputBoundary) {
    const outputModel: PostCommentOutputModel = new PostCommentOutputModel();
    try {
      const authkey = await this.authRepository.getKey();
      const comments = await this.postRepository.getPostComments(authkey, postInputModel.username, postInputModel.postId);

      outputModel.comments = comments.map(it => {
        let output = new PostComment();

        output.avatar = it.author.avatar;
        output.user = it.author.username;
        output.username = it.author.id;
        output.date = it.publish;
        output.text = it.text;

        return output;
      });
      outputBoundary.onGetPostCommentSuccess(outputModel);
    } catch (err) {
      outputBoundary.onGetPostCommentError(err);
    }
  }

  async addPostComment(postCommentInputModel: PostCommentInputModel, outputBoundary: PostCommentOutputBoundary) {
    try {
      console.log("vou");
      const authkey = await this.authRepository.getKey();
      await this.postRepository.publishPostComment(
        postCommentInputModel.comment, authkey, postCommentInputModel.username, postCommentInputModel.postId
      );

      console.log("resolvi");
      outputBoundary.onAddCommentSuccess();

    } catch (e) {
      outputBoundary.onAddCommentError(e);
    }
  }
}
