import {Mapper} from '../../../entity/mapper/Mapper';
import Nivel from '../../../entity/Nivel';
import NivelDataModel from "../NivelDataModel";

export default class NivelDataMapper implements Mapper<Nivel, NivelDataModel> {

  toEntity(other: NivelDataModel): Nivel {
    const nivel: Nivel = new Nivel();
    nivel.id = other.id;
    nivel.experiencia = other.experiencia;
    nivel.nome = other.nome;
    return nivel;
  }

  toOther(entity: Nivel): NivelDataModel {
    const nivelDataModel: NivelDataModel = new NivelDataModel();
    nivelDataModel.id = entity.id;
    nivelDataModel.experiencia = entity.experiencia;
    nivelDataModel.nome = entity.nome;
    return nivelDataModel;
  }
}
