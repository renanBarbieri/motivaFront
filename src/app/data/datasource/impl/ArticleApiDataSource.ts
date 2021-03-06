import {ArticleDataSource} from "@app/data/datasource/ArticleDataSource";
import Article from "@app/entity/Article";

export default class ArticleApiDataSource implements ArticleDataSource{

  get(id: string): Promise<Article> {
    return new Promise<Article>(async (resolve, reject) => {

      let article = new Article();

      article.title = "Sucesso";
      article.publishDate = "11/11/2017";

      resolve(article);
    });
  }
}
