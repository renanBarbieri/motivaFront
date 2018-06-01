import {DataSourceMapper} from "./DataSourceMapper";
import Post from "@app/entity/Post";
import DataSourcePostCard from "@app/data/model/DataSourcePostCard";
import User from "@app/entity/User";
import DataSourcePostOwner from "@app/data/model/DataSourceUserProfile";

export default class PostCardDataSourceMapper implements DataSourceMapper<DataSourcePostCard, Post> {

  private static fromOwnerToUser(owner: DataSourcePostOwner): User {
    let user = new User();
    user.id = owner.username;
    user.avatar = owner.avatar_url;
    user.username = owner.first_name + " " + owner.last_name;

    return user;
  }

  toEntity(dataSource: DataSourcePostCard): Post {
    let post = new Post();

    post.id = dataSource.id.toString();
    post.title = dataSource.title;
    post.subtitle = dataSource.subtitle;
    post.favorites = dataSource.views;
    post.likes = dataSource.likes;
    post.headerImage = dataSource.image_url;
    post.owner = PostCardDataSourceMapper.fromOwnerToUser(dataSource.author);
    post.publishDate = new Date(dataSource.date);
    post.editedDate = new Date(dataSource.edited_at);

    return post;
  }

  toDataSource(entity: Post): DataSourcePostCard {
    throw new Error("Method not implemented.");
  }
}
