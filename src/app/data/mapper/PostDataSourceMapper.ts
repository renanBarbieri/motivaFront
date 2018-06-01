import {DataSourceMapper} from "./DataSourceMapper";
import Post from "@app/entity/Post";
import User from "@app/entity/User";
import DataSourcePostOwner from "@app/data/model/DataSourceUserProfile";
import DataSourcePost from "@app/data/model/DataSourcePost";
import TagDataSourceMapper from "@app/data/mapper/TagDataSourceMapper";

export default class PostDataSourceMapper implements DataSourceMapper<DataSourcePost, Post> {


  private static fromOwnerToUser(owner: DataSourcePostOwner): User {
    let user = new User();
    user.id = owner.username;
    user.avatar = owner.avatar_url;
    user.username = owner.first_name + " " + owner.last_name;

    return user;
  }

  toEntity(dataSource: DataSourcePost): Post {
    let tagMapper = new TagDataSourceMapper();
    let post = new Post();

    post.id = dataSource.id.toString();
    post.title = dataSource.title;
    post.subtitle = dataSource.description;
    post.content = dataSource.text;
    post.favorites = dataSource.views;
    post.likes = dataSource.likes;
    post.headerImage = dataSource.image_url;
    post.owner = PostDataSourceMapper.fromOwnerToUser(dataSource.author);
    post.publishDate = new Date(dataSource.date);
    post.editedDate = new Date(dataSource.edited_at);
    post.estimatedTime = dataSource.reading_time;
    post.tags = dataSource.tags.map(it => tagMapper.toEntity(it));

    return post;
  }

  toDataSource(entity: Post): DataSourcePost {
    let dataSoucePost = new DataSourcePost();
    dataSoucePost.title = entity.title;
    dataSoucePost.description = entity.subtitle;
    dataSoucePost.text = entity.content;
    dataSoucePost.image_url = entity.headerImage;

    return dataSoucePost;
  }
}
