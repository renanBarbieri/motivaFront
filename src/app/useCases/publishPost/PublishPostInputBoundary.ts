import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";

export interface PublishPostInputBoundary {

  /**
   * Create an file uploader
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  buildBannerUploader(outputBoundary: PublishPostOutputBoundary);

  /**
   * Get tags registered
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  getRegisteredTags(outputBoundary: PublishPostOutputBoundary);

  /**
   * Upload an image for this post
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  uploadBanner(outputBoundary: PublishPostOutputBoundary);

  /**
   * Publish post
   * @param {PublishPostInputModel} post
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  publishPost(post: PublishPostInputModel, outputBoundary: PublishPostOutputBoundary);
}

export class PublishPostInputModel {
  title: string;
  tags: Array<string>;
  text: string;
  bannerURL: string;
}
