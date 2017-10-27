import { Mapper } from '../../../entity/mapper/Mapper';
import Usuario from '../../../entity/Usuario';
import UsuarioViewModel, {default as UserViewModel} from '../../model/UsuarioViewModel';
import NivelViewMapper from './NivelViewMapper';

export default class UsuarioViewMapper implements Mapper<Usuario, UsuarioViewModel>{

  private nivelViewMapper: NivelViewMapper;

  constructor(){
    this.nivelViewMapper = new NivelViewMapper();
  }

  toEntity(other: UserViewModel): Usuario {
    const usuario: Usuario = new Usuario();
    usuario.id = other.id;
    usuario.username = other.username;
    usuario.avatar = other.foto;
    usuario.nivel = this.nivelViewMapper.toEntity(other.nivel);
    return usuario;
  }

  toOther(entity: Usuario): UserViewModel {
    const usuarioView: UsuarioViewModel = new UsuarioViewModel();
    usuarioView.id = entity.id;
    usuarioView.username = entity.username;
    usuarioView.foto = entity.avatar;
    usuarioView.nivel = this.nivelViewMapper.toOther(entity.nivel);
    return usuarioView;
  }
}
