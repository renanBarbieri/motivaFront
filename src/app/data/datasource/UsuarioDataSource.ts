import Usuario from "@app/entity/Usuario";

export interface UsuarioDataSource{
  get(id: string): Promise<Usuario>;
}
