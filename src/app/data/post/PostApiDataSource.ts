import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PostDataSource} from "app/data/post/PostDataSource";
import DataSourcePost from "app/data/model/DataSourcePost";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourcePostsResponse from "@app/data/model/DataSourcePostsResponse";
import {FileItem, FileUploader} from "ng2-file-upload";
import DataSourceTagResponse from "@app/data/model/DataSourceTagResponse";
import DataSourceTag from "@app/data/model/DataSourceTag";

@Injectable()
export default class PostApiDataSource extends DataSourceConfig implements PostDataSource{

  fileUploader: FileUploader;

  constructor(protected http: HttpClient){
    super();
    let allowedMimeType: string[] = ['image/png', 'image/jpg', 'image/jpeg'];
    this.fileUploader = new FileUploader({
      url: `${PostApiDataSource.dataSourceURL}/upload/post_image'`,
      allowedMimeType: allowedMimeType
    });
  }

  get(id: string): Promise<Post> {
    return new Promise<Post>(async (resolve, reject) => {

      let article = new Post();

      article.title = "Sucesso";
      article.publishDate = new Date();

      resolve(article);
    });
  }


  getPostsFromTag(authKey: string, tagId: string): Promise<DataSourcePost[]> {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let url = `${PostApiDataSource.dataSourceURL}/tag/${tagId}/posts`;
    let getPostsRequest = this.http.get<DataSourceResponse<DataSourcePostsResponse>>(url, {headers});

    return new Promise<DataSourcePost[]>(async (resolve, reject) => {

      getPostsRequest.subscribe( response => {
          console.log(response);

          if(response.status){
            resolve(response.result.posts)
          }
        }
      );
    });
  }

  /**
   *
   * @returns {FileUploader}
   */
  getImageUploader(): FileUploader {
    return this.fileUploader;
  }


  /**
   * Pega as tags registradas no servidor
   * @param {string} authKey
   * @returns {Promise<DataSourceTag[]>}
   */
  getTags(authKey: string) {
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${authKey}`
    });

    let url = `${PostApiDataSource.dataSourceURL}/tag`;
    let getTagsRequest = this.http.get<DataSourceResponse<DataSourceTagResponse>>(url, {headers});

    return new Promise<DataSourceTag[]>(async (resolve, reject) => {

      getTagsRequest.subscribe( response => {
          console.log(response);

          if(response.status){
            resolve(response.result.tags)
          }
        }
      );
    });
  }

  /**
   * Publica a imagem no servidor e retorna uma string com a URL da imagem
   * @returns {Promise<string>}
   */
  publishImage(): Promise<string>{
    return new Promise<string>(async (resolve, reject) => {
      resolve("http://www.imgglobalinfotech.com/images/single-pages/banner-design.png");
      //TODO: descomentar quando estiver pronto
      // this.fileUploader.uploadItem(this.getLastFile());
      // this.fileUploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      //   const responsePath = JSON.parse(response);
      //   // console.log(response, responsePath);// the url will be in the response
      //   resolve(responsePath);
      // };
    });
  }

  /**
   * Pega o último item adicionano na fila de upload
   * @returns {FileItem}
   */
  getLastFile(): FileItem {
    if(this.fileUploader.queue.length < 1) return null;
    return this.fileUploader.queue[this.fileUploader.queue.length-1];
  }
}
