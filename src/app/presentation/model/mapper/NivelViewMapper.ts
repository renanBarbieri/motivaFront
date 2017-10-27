import { Mapper } from '../../../entity/mapper/Mapper';
import Nivel from '../../../entity/Nivel';
import NivelViewModel from '../../model/NivelViewModel';

export default class NivelViewMapper implements Mapper<Nivel, NivelViewModel> {

  toEntity(other: NivelViewModel): Nivel {
    const nivel: Nivel = new Nivel();
    nivel.id = other.id;
    nivel.experiencia = other.experiencia;
    nivel.nome = other.nome;
    return nivel;
  }

  toOther(entity: Nivel): NivelViewModel {
    const nivelView: NivelViewModel = new NivelViewModel();
    nivelView.id = entity.id;
    nivelView.experiencia = entity.experiencia;
    nivelView.nome = entity.nome;
    return nivelView;
  }
}
