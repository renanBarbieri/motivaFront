import DataSourceLevel from "@app/data/model/DataSourceLevel";
import DataSourceReward from "@app/data/model/DataSourceReward";
import DataSourceTag from "@app/data/model/DataSourceTag";

export default class DataSourceUser {
  name: string;
  description: string;
  username: string;
  avatar: string;
  email: string;
  experience: number;
  facebook: string;
  github: string;
  linkedin: string;
  level: DataSourceLevel;
  rewards: DataSourceReward[];
  tags: DataSourceTag[];
}
