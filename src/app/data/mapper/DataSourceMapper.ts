import {Entity} from "@app/entity/Entity";

export interface DataSourceMapper<K, T extends Entity>{
  toEntity(dataSource: K): T;
  toDataSource(entity: T): K;
}
