import {FileUploader} from "ng2-file-upload";
import Tag from "@app/entity/Tag";

export interface PublishPostGateway {

  /**
   * Cria um controlador para upload de imagem
   * @returns {FileUploader}
   */
  getImageUploader(): FileUploader;

  /**
   * Pega todas as tags cadastradas
   * @returns {Promise<Array<Tag>>}
   */
  getTags(auth: string): Promise< Array<Tag> >;

  /**
   * Publica a imagem
   * @returns {Promise<string>}
   */
  postImage(auth: string): Promise<string>;
}
