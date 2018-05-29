import {FileUploader} from "ng2-file-upload";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";

export interface PublishPostGateway {

  /**
   * Cria um controlador para upload de imagem
   * @returns {FileUploader}
   */
  getImageUploader(authKey: string): FileUploader;

  /**
   * Publica a imagem
   * @returns {Promise<string>}
   */
  postImage(auth: string): Promise<string>;

  publishPost(auth: string, post: Post): Promise<number>;
}
