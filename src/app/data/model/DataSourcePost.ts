import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourcePost{
  id: number;
  title: string;
  subtitle: string;
  views: number;
  likes: number;
  image_url: string;
  date: number;
  edited_at: number;
  author: DataSourceUserProfile;
}
