import DataSourceTag from "@app/data/model/DataSourceTag";
import DataSourcePost from "@app/data/model/DataSourcePost";
import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourceSearch {
  users: DataSourceUserProfile[];
  tags: DataSourceTag[];
  posts: DataSourcePost[];
}
