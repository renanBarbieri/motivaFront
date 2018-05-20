import {FileUploader} from "ng2-file-upload";

export interface PublishPostOutputBoundary {

  /**
   * Função para pegar o gerenciador de upload de imagem.
   * @param {ImageUploaderOutputModel} imageUploaderOutputModel
   */
  onImageUploaderBuilt(imageUploaderOutputModel: ImageUploaderOutputModel);

  /**
   *
   * @param {TagListOutputModel} tagsOutputModel
   */
  onTagsListed(tagsOutputModel: TagListOutputModel);

  /**
   * Função que indica quando a imagem de um post é enviada ao servidor com sucesso.
   * @param {BannerOutputModel} bannerOutputModel
   */
  onBannerUploaded(bannerOutputModel: BannerOutputModel);

  /**
   * Função que indica quando um post é publicado com sucesso
   * @param {PublishPostOutputModel} publishPostOutputModel
   */
  onPublishSuccess(publishPostOutputModel: PublishPostOutputModel);

  /**
   * Função que indica quando o uload da imagem de um post falha.
   * @param errorData
   */
  onBannerUploadError(errorData: any);

  /**
   * Função que indica quando há algum erro ao publicar um post
   * @param errorData
   */
  onPublishError(errorData: any);
}

export class TagListOutputModel {
  tags: Array<string>;
}

export class ImageUploaderOutputModel {
  imageUploader: FileUploader;
}

export class BannerOutputModel {
  url: string;
}

export class PublishPostOutputModel {
  postId: number;
}
