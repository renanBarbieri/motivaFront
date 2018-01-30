import Article from "@app/entity/Article";

export interface ArticleDataSource{
  get(id: string): Promise<Article>;
}
