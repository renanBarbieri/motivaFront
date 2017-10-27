import Usuario from "../../entity/Usuario";

export interface UsuarioDataService {
  get(id: String): Promise<Usuario>;
}
