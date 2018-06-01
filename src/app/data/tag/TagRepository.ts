import {Injectable} from "@angular/core";
import Tag from "@app/entity/Tag";
import TagDataSourceMapper from "@app/data/mapper/TagDataSourceMapper";
import DataSourceTag from "@app/data/model/DataSourceTag";
import TagApiDataSource from "@app/data/tag/TagApiDataSource";
import {ManageTagGateway} from "@app/useCases/tag/ManageTagGateway";

@Injectable()
export default class TagRepository implements ManageTagGateway {

  constructor(private tagApiDataSource: TagApiDataSource) {
  }

  getTags(auth: string): Promise<Array<Tag>> {
    return new Promise<Array<Tag>>(async (resolve, reject) => {
      let tagMapper = new TagDataSourceMapper();
      let dataSourceTags: DataSourceTag[] = await this.tagApiDataSource.getTags(auth);
      resolve(dataSourceTags.map(it =>
        tagMapper.toEntity(it)
      ));
    });
  }


  saveTagsOnCache(tags: Array<Tag>): Promise<boolean> {
    return null;
  }


  getCacheTags(): Promise<Array<Tag>> {
    return null;
  }
}
