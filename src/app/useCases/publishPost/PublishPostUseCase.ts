import {Injectable} from "@angular/core";
import {PublishPostInputBoundary, PublishPostInputModel} from "@app/useCases/publishPost/PublishPostInputBoundary";
import {
  BannerOutputModel, ImageUploaderOutputModel,
  PublishPostOutputBoundary, TagListOutputModel
} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import PostRepository from "@app/data/post/PostRepository";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class PublishPostUseCase implements PublishPostInputBoundary {

  constructor(private publishPostRepository: PostRepository,
              private authRepository: AuthRepository){}

  /**
   * Create an file uploader
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  buildBannerUploader(outputBoundary: PublishPostOutputBoundary) {
    const outputModel = new ImageUploaderOutputModel();
    outputModel.imageUploader = this.publishPostRepository.getImageUploader();
    outputBoundary.onImageUploaderBuilt(outputModel);
  }

  /**
   * Get tags registered
   */
  async getRegisteredTags(outputBoundary: PublishPostOutputBoundary) {
    const outputModel = new TagListOutputModel();
    try {
      let tokenKey = await this.authRepository.getKey();
      let tags = await this.publishPostRepository.getTags(tokenKey);
      outputModel.tags = tags.map(it => {
        return it.name;
      });
      outputBoundary.onTagsListed(outputModel);
    } catch (error){

    }
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
    } catch (error){
      outputBoundary.onBannerUploadError(error);
    }
  }

  /**
   * Publish post
   * @param {PublishPostInputModel} post
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  publishPost(post: PublishPostInputModel, outputBoundary: PublishPostOutputBoundary) {

  }
}
