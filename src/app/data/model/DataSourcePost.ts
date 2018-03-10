import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourcePost{
  id: number;
  title: string;
  subtitle: string;
  image: string;
  publishDate: number;
  editedDate: number;
  owner: DataSourceUserProfile;
}
