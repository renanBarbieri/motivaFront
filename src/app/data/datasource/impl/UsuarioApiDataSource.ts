import {UsuarioDataSource} from "../UsuarioDataSource";
import Usuario from "../../../entity/Usuario";

export default class UsuarioApiDataSource implements UsuarioDataSource{

  get(id: string): Promise<Usuario> {
    return new Promise<Usuario>(async (resolve, reject) => {

      let usuario = new Usuario();
  
      usuario.username = "CLEAN_ARCH_OK";

      resolve(usuario);
    });
  }
}
