import Nivel from './nivel';
import Recompensa from './recompensa';
import Tag from './tag';

export default class Usuario {
    private id: String;
    private nome: String;
    private descricao: String;
    private username: String;
    private avatar: String;
    private email: String;
    private experiencia: Number;
    private facebook: String;
    private github: String;
    private linkedin: String;
    private nivel: Nivel;
    private recompensas: Recompensa[];
    private interesses: Tag[];
}
