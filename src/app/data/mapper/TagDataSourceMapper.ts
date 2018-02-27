import {DataSourceMapper} from "@app/data/mapper/DataSourceMapper";
import DataSourceTag from "@app/data/model/DataSourceTag";
import Tag from "@app/entity/Tag";

export default class TagDataSourceMapper implements DataSourceMapper<DataSourceTag, Tag> {

  toEntity(dataSource: DataSourceTag): Tag {
    let tag = new Tag();
    tag.name = dataSource.name;
    tag.id = dataSource.id.toString();
    return tag;
  }

  toDataSource(entity: Tag): DataSourceTag {
    throw new Error("Method not implemented.");
  }

  toEntityArray(dataSource: DataSourceTag[]): Tag[] {
    let returnArr = [];
    for(let dsTag of dataSource){
      returnArr.push(this.toEntity(dsTag))
    }
    return returnArr;
  }

}
