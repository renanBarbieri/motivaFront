import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourcePost{
  id: number;
  title: string;
  subtitle: string;
  favorites: number;
  likes: number;
  image_url: string;
  publishDate: number;
  editedDate: number;
  owner: DataSourceUserProfile;
}
