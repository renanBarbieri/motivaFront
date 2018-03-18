import DataSourceLevel from "@app/data/model/DataSourceLevel";
import DataSourceReward from "@app/data/model/DataSourceReward";
import DataSourceTag from "@app/data/model/DataSourceTag";
import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";

export default class DataSourceUser extends DataSourceUserProfile {
  description: string;
  username: string;
  email: string;
  experience: number;
  facebook: string;
  github: string;
  linkedin: string;
  level: DataSourceLevel;
  rewards: DataSourceReward[];
  tags: DataSourceTag[];
}
