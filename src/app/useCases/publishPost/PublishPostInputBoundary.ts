import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";

export interface PublishPostInputBoundary {

  getBannerUploader(outputBoundary: PublishPostOutputBoundary);

  uploadBanner(outputBoundary: PublishPostOutputBoundary);

  publishPost(post: PublishPostInputModel, outputBoundary: PublishPostOutputBoundary);
}

export class PublishPostInputModel {
  title: string;
  tags: Array<string>;
  text: string;
  bannerURL: string;
}
