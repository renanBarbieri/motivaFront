import {ArticleDataSource} from "@app/data/datasource/ArticleDataSource";
import ArticleApiDataSource from "@app/data/datasource/impl/ArticleApiDataSource";
import Article from "@app/entity/Article";
import {Injectable} from "@angular/core";

@Injectable()
export default class ArticleRepository implements ArticleDataSource{

  constructor(private articleApiDataSource: ArticleApiDataSource){}

  get(id: string): Promise<Article> {
    return new Promise<Article>(async (resolve, reject) => {
      let article: Article = await this.articleApiDataSource.get(id);

      resolve(article);
    });
  }
}
