import {DataSourceMapper} from "./DataSourceMapper";
import Post from "@app/entity/Post";
import DataSourcePost from "@app/data/model/DataSourcePost";

export default class PostDataSourceMapper implements DataSourceMapper<DataSourcePost, Post>{

  toEntity(dataSource: DataSourcePost): Post {
    let post = new Post();

    post.id = "ojasndja";
    post.title = dataSource.title;
    post.subtitle = dataSource.subtitle;
    post.content = dataSource.content;
    post.owner = dataSource.ownerName;
    post.publishDate = new Date(dataSource.publishDate);
    post.editedDate = new Date(dataSource.editedDate);

    return post;
  }



  toDataSource(entity: Post): DataSourcePost {
    throw new Error("Method not implemented.");
  }
}
