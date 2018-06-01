import {Injectable} from "@angular/core";
import {PublishPostInputBoundary, PublishPostInputModel} from "@app/useCases/publishPost/PublishPostInputBoundary";
import {
  BannerOutputModel, ImageUploaderOutputModel, PublishPostOutputBoundary,
  PublishPostOutputModel
} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import PostRepository from "@app/data/post/PostRepository";
import AuthRepository from "@app/data/auth/AuthRepository";
import Post from "@app/entity/Post";

@Injectable()
export default class PublishPostUseCase implements PublishPostInputBoundary {

  constructor(private publishPostRepository: PostRepository,
              private authRepository: AuthRepository) {
  }

  /**
   * Create an file uploader
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  async buildBannerUploader(outputBoundary: PublishPostOutputBoundary) {
    const outputModel = new ImageUploaderOutputModel();
    let tokenKey = await this.authRepository.getKey();
    outputModel.imageUploader = this.publishPostRepository.getImageUploader(tokenKey);
    outputBoundary.onImageUploaderBuilt(outputModel);
  }

  /**
   * Upload an image for this post
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  async uploadBanner(outputBoundary: PublishPostOutputBoundary) {
    try {
      let tokenKey = await this.authRepository.getKey();
      let imageURL: string = await this.publishPostRepository.postImage(tokenKey);
      let outputModel: BannerOutputModel = new BannerOutputModel();
      outputModel.url = imageURL;
      outputBoundary.onBannerUploaded(outputModel);
    } catch (error) {
      outputBoundary.onBannerUploadError(error);
    }
  }

  /**
   * Publish post
   * @param {PublishPostInputModel} postInput
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  async publishPost(postInput: PublishPostInputModel, outputBoundary: PublishPostOutputBoundary) {
    try {
      let tokenKey = await this.authRepository.getKey();
      let post: Post = new Post();
      post.title = postInput.title;
      post.subtitle = postInput.text.substr(0, 250);
      post.content = postInput.text;
      // post.tags = ["android"];
      post.headerImage = postInput.bannerURL;
      let postId: number = await this.publishPostRepository.publishPost(tokenKey, post);
      let outputModel: PublishPostOutputModel = new PublishPostOutputModel();
      outputModel.postId = postId;
      console.log(outputModel);
      outputBoundary.onPublishSuccess(outputModel);
    } catch (error) {
      console.log(error);
      outputBoundary.onPublishError(error);
    }
  }
}
