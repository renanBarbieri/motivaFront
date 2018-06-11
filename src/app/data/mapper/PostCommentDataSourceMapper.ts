import {DataSourceMapper} from "./DataSourceMapper";
import DataSourcePostComment from "@app/data/model/DataSourcePostComment";
import Comment from "@app/entity/Comment";
import User from "@app/entity/User";
import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class PostCommentDataSourceMapper implements DataSourceMapper<DataSourcePostComment, Comment> {
  toDataSource(entity: Comment): DataSourcePostComment {
    return undefined;
  }

  toEntity(dataSource: DataSourcePostComment): Comment {
    let entity = new Comment();
    entity.id = dataSource.id.toString();
    entity.author = PostCommentDataSourceMapper.fromOwnerToUser(dataSource.author);
    entity.publish = dataSource.date;
    entity.text = dataSource.text;
    return entity;
  }

  private static fromOwnerToUser(owner: DataSourceUserProfile): User {
    let user = new User();
    user.id = owner.username;
    user.avatar = owner.avatar_url;
    user.username = owner.first_name + " " + owner.last_name;

    return user;
  }
}
