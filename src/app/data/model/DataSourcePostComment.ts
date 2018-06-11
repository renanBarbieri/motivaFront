import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourcePostComment {
  id: number;
  author: DataSourceUserProfile;
  text: string;
  date: Date;
}
