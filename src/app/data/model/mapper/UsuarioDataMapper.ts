import { Mapper } from '../../../entity/mapper/Mapper';
import Usuario from '../../../entity/Usuario';
import UsuarioDataModel from '../../model/UsuarioDataModel';
import NivelDataMapper from "./NivelDataMapper";

export default class UsuarioDataMapper implements Mapper<Usuario, UsuarioDataModel>{

  private nivelDataMapper: NivelDataMapper;

  constructor(){
    this.nivelDataMapper = new NivelDataMapper();
  }

  toEntity(other: UsuarioDataModel): Usuario {
    const usuario: Usuario = new Usuario();
    usuario.id = other.id;
    usuario.username = other.username;
    usuario.avatar = other.foto;
    usuario.nivel = this.nivelDataMapper.toEntity(other.nivel);
    return usuario;
  }

  toOther(entity: Usuario): UsuarioDataModel {
    const usuarioData: UsuarioDataModel = new UsuarioDataModel();
    usuarioData.id = entity.id;
    usuarioData.username = entity.username;
    usuarioData.foto = entity.avatar;
    usuarioData.nivel = this.nivelDataMapper.toOther(entity.nivel);
    return usuarioData;
  }
}
