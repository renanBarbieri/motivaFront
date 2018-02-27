import {DataSourceMapper} from "@app/data/mapper/DataSourceMapper";
import DataSourceReward from "@app/data/model/DataSourceReward";
import Reward from "@app/entity/Reward";

export default class RewardDataSourceMapper implements DataSourceMapper<DataSourceReward, Reward> {

  toEntity(dataSource: DataSourceReward): Reward {
    let reward = new Reward();
    reward.image = dataSource.icon;
    reward.name = dataSource.name;
    reward.id = dataSource.description; //TODO adicionar id e descrição
    return reward;
  }

  toDataSource(entity: Reward): DataSourceReward {
    throw new Error("Method not implemented.");
  }

  toEntityArray(dataSource: DataSourceReward[]): Reward[] {
    let returnArr = [];
    for(let dsReward of dataSource){
      returnArr.push(this.toEntity(dsReward))
    }
    return returnArr;
  }

}
