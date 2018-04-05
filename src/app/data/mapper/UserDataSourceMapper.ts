import {DataSourceMapper} from "./DataSourceMapper";
import User from "@app/entity/User";
import DataSourceUser from "@app/data/model/DataSourceUser";
import LevelDataSourceMapper from "@app/data/mapper/LevelDataSourceMapper";
import RewardDataSourceMapper from "@app/data/mapper/RewardDataSourceMapper";
import TagDataSourceMapper from "@app/data/mapper/TagDataSourceMapper";

export default class UserDataSourceMapper implements DataSourceMapper<DataSourceUser, User>{

  toEntity(dataSource: DataSourceUser): User {
    let user = new User();
    let levelMapper = new LevelDataSourceMapper();
    let rewardMapper = new RewardDataSourceMapper();
    let tagMapper = new TagDataSourceMapper();

    user.name = dataSource.name;
    user.description = dataSource.description;
    user.username = dataSource.username;
    user.avatar = dataSource.avatar;
    user.email = dataSource.email;
    user.experience = dataSource.experience;
    user.facebook = dataSource.facebook;
    user.github = dataSource.github;
    user.linkedin = dataSource.linkedin;
    user.level = levelMapper.toEntity(dataSource.level);
    user.rewards = dataSource.achievements.map(function (it) {
      return rewardMapper.toEntity(it);
    });
    user.interests = dataSource.interests.map(function (it) {
      return tagMapper.toEntity(it);
    });

    return user;
  }



  toDataSource(entity: User): DataSourceUser {
    throw new Error("Method not implemented.");
  }
}
