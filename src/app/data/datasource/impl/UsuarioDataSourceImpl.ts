import {UsuarioDataSource} from "../UsuarioDataSource";
import UsuarioDataModel from "../../model/UsuarioDataModel";
import NivelDataModel from "../../model/NivelDataModel";

export default class UsuarioDataSourceImpl implements UsuarioDataSource{

  get(id: String): Promise<UsuarioDataModel> {
    return new Promise<UsuarioDataModel>(async (resolve, reject) => {

      let usuario: UsuarioDataModel = new UsuarioDataModel()

      usuario.id = "fodase";
      usuario.nivel = new NivelDataModel();
      usuario.nivel.id = "id";
      usuario.nivel.experiencia = 12;
      usuario.nivel.nome = "level";

      usuario.foto = "foto";
      usuario.username = "PIRU";

      resolve(usuario);
    });
  }
}
