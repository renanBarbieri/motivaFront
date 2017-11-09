import {UsuarioDataSource} from "../UsuarioDataSource";
import Usuario from "@app/entity/Usuario";
import Nivel from "@app/entity/Nivel";

export default class UsuarioApiDataSource implements UsuarioDataSource{

  get(id: string): Promise<Usuario> {
    return new Promise<Usuario>(async (resolve, reject) => {

      let usuario = new Usuario();

      usuario.username = "CLEAN_ARCH_OK";

      let nivelUsuario = new Nivel();
      nivelUsuario.experiencia = 40;
      nivelUsuario.nome = "Expert";

      usuario.nivel = nivelUsuario;

      resolve(usuario);
    });
  }
}
