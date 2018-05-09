import {DataSourceMapper} from "@app/data/mapper/DataSourceMapper";
import DataSourceReward from "@app/data/model/DataSourceReward";
import Reward from "@app/entity/Reward";

export default class RewardDataSourceMapper implements DataSourceMapper<DataSourceReward, Reward> {

  toEntity(dataSource: DataSourceReward): Reward {
    let reward = new Reward();
    reward.image = dataSource.image_url;
    reward.name = dataSource.name;
    reward.id = dataSource.id.toString();
    reward.description = dataSource.description;
    return reward;
  }

  toDataSource(entity: Reward): DataSourceReward {
    throw new Error("Method not implemented.");
  }

}
