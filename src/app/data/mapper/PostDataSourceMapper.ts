import {DataSourceMapper} from "./DataSourceMapper";
import Post from "@app/entity/Post";
import DataSourcePost from "@app/data/model/DataSourcePost";
import User from "@app/entity/User";
import DataSourcePostOwner from "@app/data/model/DataSourcePostOwner";

export default class PostDataSourceMapper implements DataSourceMapper<DataSourcePost, Post>{

  toEntity(dataSource: DataSourcePost): Post {
    let post = new Post();

    post.id = "ojasndja";
    post.title = dataSource.title;
    post.subtitle = dataSource.subtitle;
    post.headerImage = dataSource.image;
    post.owner = PostDataSourceMapper.fromOwnerToUser(dataSource.owner);
    post.publishDate = new Date(dataSource.publishDate);
    post.editedDate = new Date(dataSource.editedDate);

    return post;
  }

  private static fromOwnerToUser(owner: DataSourcePostOwner): User{
    let user = new User();
    user.id = owner.id;
    user.avatar = owner.avatar;
    user.username = owner.name;

    return user;
  }


  toDataSource(entity: Post): DataSourcePost {
    throw new Error("Method not implemented.");
  }
}
