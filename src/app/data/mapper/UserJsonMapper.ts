import {JSONMapper} from "./JsonMapper";
import User from "@app/entity/User";

export default class UserJsonMapper implements JSONMapper<User>{
  toEntity(json: any): User {
    throw new Error("Method not implemented.");
  }

  toJSON(entity: User) {
    throw new Error("Method not implemented.");
  }
}
