import {FileUploader} from "ng2-file-upload";

export interface ManageTagOutputBoundary {

  /**
   *
   * @param {TagListOutputModel} tagsOutputModel
   */
  onTagsListed(tagsOutputModel: TagListOutputModel);
}

export class TagListOutputModel {
  tags: Array<string>;
}
