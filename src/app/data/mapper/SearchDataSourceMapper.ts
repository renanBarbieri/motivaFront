import User from "@app/entity/User";
import TagDataSourceMapper from "@app/data/mapper/TagDataSourceMapper";
import DataSourceSearch from "@app/data/model/DataSourceSearch";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";
import UserProfileDataSourceMapper from "@app/data/mapper/UserProfileDataSourceMapper";
import PostDataSourceMapper from "@app/data/mapper/PostDataSourceMapper";

export default class SearchDataSourceMapper{

  toEntity(dataSource: DataSourceSearch): [Array<User>, Array<Tag>, Array<Post>] {

    let userProfileMapper = new UserProfileDataSourceMapper();
    let postMapper = new PostDataSourceMapper();
    let tagMapper = new TagDataSourceMapper();

    let users: Array<User> = dataSource.users.map(function (it) {
      return userProfileMapper.toEntity(it);
    });

    let tags: Array<Tag> = dataSource.tags.map(function (it) {
      return tagMapper.toEntity(it);
    });
    let posts: Array<Post> = dataSource.posts.map(function (it) {
      return postMapper.toEntity(it);
    });

    return [users, tags, posts];
  }



  toDataSource(entity: [Array<User>, Array<Tag>, Array<Post>]): DataSourceSearch {
    throw new Error("Method not implemented.");
  }
}
