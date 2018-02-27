import {DataSourceMapper} from "@app/data/mapper/DataSourceMapper";
import Level from "@app/entity/Level";
import DataSourceLevel from "@app/data/model/DataSourceLevel";


export default class LevelDataSourceMapper implements DataSourceMapper<DataSourceLevel, Level>{

  toEntity(dataSource: DataSourceLevel): Level {
    let level = new Level();
    level.name = dataSource.name;
    level.experience = dataSource.completetion;
    level.description = dataSource.nextLevelName; //TODO: adicionar nome do proximo nivel
    return level;
  }

  toDataSource(entity: Level): DataSourceLevel {
    throw new Error("Method not implemented.");
  }


}
