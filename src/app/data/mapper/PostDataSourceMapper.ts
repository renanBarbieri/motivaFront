import {DataSourceMapper} from "./DataSourceMapper";
import Post from "@app/entity/Post";
import DataSourcePost from "@app/data/model/DataSourcePost";
import User from "@app/entity/User";
import DataSourcePostOwner from "@app/data/model/DataSourceUserProfile";

export default class PostDataSourceMapper implements DataSourceMapper<DataSourcePost, Post>{

  toEntity(dataSource: DataSourcePost): Post {
    let post = new Post();

    post.id = dataSource.id.toString();
    post.title = dataSource.title;
    post.subtitle = dataSource.subtitle;
    post.favorites = dataSource.views;
    post.likes = dataSource.likes;
    post.headerImage = dataSource.image_url;
    post.owner = PostDataSourceMapper.fromOwnerToUser(dataSource.author);
    post.publishDate = new Date(dataSource.date);
    post.editedDate = new Date(dataSource.edited_at);

    return post;
  }

  private static fromOwnerToUser(owner: DataSourcePostOwner): User{
    let user = new User();
    user.id = owner.username;
    user.avatar = owner.avatar_url;
    user.username = owner.first_name+" "+owner.last_name;

    return user;
  }


  toDataSource(entity: Post): DataSourcePost {
    throw new Error("Method not implemented.");
  }
}
