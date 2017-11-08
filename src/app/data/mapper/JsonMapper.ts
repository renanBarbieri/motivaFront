import {Entity} from "../../entity/Entity";

export interface JSONMapper<T extends Entity>{
  toEntity(json: any): T;
  toJSON(entity: T): any;
}
