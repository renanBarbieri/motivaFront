import {PublishPostOutputBoundary} from "@app/useCases/publishPost/PublishPostOutputBoundary";

export interface ManageTagInputBoundary {

  /**
   * Get tags registered
   * @param {PublishPostOutputBoundary} outputBoundary
   */
  getRegisteredTags(outputBoundary: PublishPostOutputBoundary);

}
