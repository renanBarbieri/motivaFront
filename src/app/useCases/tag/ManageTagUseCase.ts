import {Injectable} from "@angular/core";
import {PublishPostOutputBoundary, TagListOutputModel} from "@app/useCases/publishPost/PublishPostOutputBoundary";
import AuthRepository from "@app/data/auth/AuthRepository";
import TagRepository from "@app/data/tag/TagRepository";
import {ManageTagInputBoundary} from "@app/useCases/tag/ManageTagInputBoundary";

@Injectable()
export default class ManageTagUseCase implements ManageTagInputBoundary{

  constructor(private tagsRepository: TagRepository,
              private authRepository: AuthRepository){}

  /**
   * Get tags registered
   */
  async getRegisteredTags(outputBoundary: PublishPostOutputBoundary) {
    const outputModel = new TagListOutputModel();
    try {
      let tokenKey = await this.authRepository.getKey();
      let tags = await this.tagsRepository.getTags(tokenKey);
      await this.tagsRepository.saveTagsOnCache(tags);

      outputModel.tags = tags.map(it => {
        return it.name;
      });
      outputBoundary.onTagsListed(outputModel);
    } catch (error){

    }
  }
}
