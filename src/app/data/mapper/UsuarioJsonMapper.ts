import {JSONMapper} from "./JsonMapper";
import Usuario from "@app/entity/Usuario";

export default class UsuarioJsonMapper implements JSONMapper<Usuario>{
  toEntity(json: any): Usuario {
    throw new Error("Method not implemented.");
  }
  
  toJSON(entity: Usuario) {
    throw new Error("Method not implemented.");
  }
}
