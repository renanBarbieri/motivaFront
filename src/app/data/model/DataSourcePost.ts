import DataSourcePostOwner from "@app/data/model/DataSourcePostOwner";

export default class DataSourcePost{
  id: number;
  title: string;
  subtitle: string;
  image: string;
  publishDate: number;
  editedDate: number;
  owner: DataSourcePostOwner;
}
