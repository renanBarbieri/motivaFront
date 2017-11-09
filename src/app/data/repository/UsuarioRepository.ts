import {UsuarioDataSource} from "@app/data/datasource/UsuarioDataSource";
import UsuarioApiDataSource from "@app/data/datasource/impl/UsuarioApiDataSource";
import Usuario from "@app/entity/Usuario";

export default class UsuarioRepository implements UsuarioDataSource{
  
  private usuarioApiDataSource: UsuarioDataSource;
  
  constructor(){
    this.usuarioApiDataSource = new UsuarioApiDataSource();
  }
  
  get(id: string): Promise<Usuario> {
    return new Promise<Usuario>(async (resolve, reject) => {
      let usuario: Usuario = await this.usuarioApiDataSource.get(id);
      
      resolve(usuario);
    });
  }
}
