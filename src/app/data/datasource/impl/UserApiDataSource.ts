import {UserDataSource} from "../UserDataSource";
import User from "@app/entity/User";
import Level from "@app/entity/Level";
import {Injectable} from "@angular/core";

@Injectable()
export default class UserApiDataSource implements UserDataSource{

  get(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {

      let user = new User();

      user.username = "Translate Success";

      let userLevel = new Level();
      userLevel.experience = 40;
      userLevel.name = "Expert";

      user.level = userLevel;

      resolve(user);
    });
  }
}
