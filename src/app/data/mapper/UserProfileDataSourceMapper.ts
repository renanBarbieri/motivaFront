import {DataSourceMapper} from "@app/data/mapper/DataSourceMapper";
import User from "@app/entity/User";
import DataSourceUserProfile from "@app/data/model/DataSourceUserProfile";


export default class UserProfileDataSourceMapper implements DataSourceMapper<DataSourceUserProfile, User> {

  toEntity(dataSource: DataSourceUserProfile): User {
    let entity = new User();
    entity.username = dataSource.first_name + " " + dataSource.last_name;
    entity.avatar = dataSource.avatar_url;
    entity.id = dataSource.username;
    return entity;
  }

  toDataSource(entity: User): DataSourceUserProfile {
    throw new Error("Method not implemented.");
  }


}
