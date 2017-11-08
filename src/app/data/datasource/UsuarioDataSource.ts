import Usuario from "../../entity/Usuario";

export interface UsuarioDataSource{
  get(id: string): Promise<Usuario>;
}
