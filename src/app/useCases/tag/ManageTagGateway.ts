import Tag from "@app/entity/Tag";

export interface ManageTagGateway {

  /**
   * Pega todas as tags cadastradas
   * @returns {Promise<Array<Tag>>}
   */
  getTags(auth: string): Promise<Array<Tag>>;

  /**
   * Salva as tags localmente
   * @returns {Promise<boolean>}
   */
  saveTagsOnCache(tags: Array<Tag>): Promise<boolean>;

  /**
   * Pega as tags do cache
   * @returns {Promise<Array<Tag>>}
   */
  getCacheTags(): Promise<Array<Tag>>

}
