import {Injectable} from "@angular/core";
import {PublishPostInputBoundary, PublishPostInputModel} from "@app/useCases/publishPost/PublishPostInputBoundary";
import {
  BannerOutputModel, ImageUploaderOutputModel,
  PublishPostOutputBoundary
} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import PostRepository from "@app/data/post/PostRepository";

@Injectable()
export default class PublishPostUseCase implements PublishPostInputBoundary {

  constructor(private publishPostRepository: PostRepository){}

  getBannerUploader(outputBoundary: PublishPostOutputBoundary) {
    const outputModel = new ImageUploaderOutputModel();
    outputModel.imageUploader = this.publishPostRepository.getImageUploader();
    outputBoundary.onImageUploaderBuilt(outputModel);
  }

  async uploadBanner(outputBoundary: PublishPostOutputBoundary) {
    try {
      const imageURL: string = await this.publishPostRepository.postImage();
      const outputModel: BannerOutputModel = new BannerOutputModel();
      outputModel.url = imageURL;
      outputBoundary.onBannerUploaded(outputModel);
    } catch (error){
      outputBoundary.onBannerUploadError(error);
    }
  }

  publishPost(post: PublishPostInputModel, outputBoundary: PublishPostOutputBoundary) {
  }
}
