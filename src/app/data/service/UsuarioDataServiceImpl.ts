import UsuarioDataMapper from "../model/mapper/UsuarioDataMapper";
import {UsuarioDataSource} from "../datasource/UsuarioDataSource";
import {UsuarioDataService} from "./UsuarioDataService";
import Usuario from "../../entity/Usuario";
import UsuarioDataModel from "../model/UsuarioDataModel";
import UsuarioDataSourceImpl from "../datasource/impl/UsuarioDataSourceImpl";

export default class UsuarioDataServiceImpl implements UsuarioDataService{
  private usuarioDataMapper: UsuarioDataMapper;
  private usuarioDataSource: UsuarioDataSource;

  constructor(){
    this.usuarioDataMapper = new UsuarioDataMapper();
    this.usuarioDataSource = new UsuarioDataSourceImpl();
  }


  get(id: String): Promise<Usuario> {
    return new Promise<Usuario>( async (resolve,reject) => {
      const usuarioDataModel: UsuarioDataModel = await this.usuarioDataSource.get(id);
      const usuario: Usuario = this.usuarioDataMapper.toEntity(usuarioDataModel);

      resolve(usuario);
    });
  }
}
