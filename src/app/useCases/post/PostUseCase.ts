import {Injectable} from "@angular/core";
import PostRepository from "@app/data/post/PostRepository";
import AuthRepository from "@app/data/auth/AuthRepository";
import {PostInputBoundary, PostInputModel} from "@app/useCases/post/PostInputBoundary";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";

@Injectable()
export default class PostUseCase implements PostInputBoundary {

  constructor(private publishPostRepository: PostRepository,
              private authRepository: AuthRepository){}


  async retrievePostData(postInputModel: PostInputModel, outputBoundary: PostOutputBoundary) {
    const outputModel: PostOutputModel = new PostOutputModel();

    try {
      const authkey = await this.authRepository.getKey();
      const post = await this.publishPostRepository.getPost(authkey, postInputModel.username, postInputModel.postId);

      console.log(post);

      outputModel.title = post.title;
      outputModel.tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];
      outputModel.estimateTime = post.estimatedTime;
      outputModel.text = post.content;
      outputModel.bannerImage = post.headerImage;
      outputBoundary.onGetPostDataSuccess(outputModel);
    } catch (err){
      outputBoundary.onGetPostDataError(err);
    }

  }
}
