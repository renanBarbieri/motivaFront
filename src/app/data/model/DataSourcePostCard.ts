import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourcePostCard{
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
