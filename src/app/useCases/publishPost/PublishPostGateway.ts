import {FileUploader} from "ng2-file-upload";

export interface PublishPostGateway {

  /**
   * Cria um controlador para upload de imagem
   * @returns {FileUploader}
   */
  getImageUploader(): FileUploader;

  /**
   * Publica a imagem
   * @returns {Promise<string>}
   */
  postImage(): Promise<string>;
}
