import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";
import DataSourceTag from "@app/data/model/DataSourceTag";

export default class DataSourcePost {
  id: number;
  title: string;
  description: string;
  text: string;
  views: number;
  likes: number;
  image_url: string;
  date: number;
  reading_time: number;
  edited_at: number;
  author: DataSourceUserProfile;
  tags: DataSourceTag[];
  who_liked: any[];
}
