import Post from "app/entity/Post";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PostDataSource} from "app/data/post/PostDataSource";
import DataSourcePost from "app/data/model/DataSourcePost";
import DataSourceResponse from "app/data/model/DataSourceResponse";
import DataSourceConfig from "app/data/DataSourceConfig";
import DataSourcePostsResponse from "@app/data/model/DataSourcePostsResponse";
import {FileItem, FileUploader} from "ng2-file-upload";

@Injectable()
export default class PostApiDataSource extends DataSourceConfig implements PostDataSource{

  fileUploader: FileUploader;

  constructor(protected http: HttpClient){ super(); }

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
  getImageUploader(authKey: string): FileUploader {
    if(!this.fileUploader){
      let allowedMimeType: string[] = ['image/png', 'image/jpg', 'image/jpeg'];
      this.fileUploader = new FileUploader({
        // url: `${PostApiDataSource.dataSourceURL}/upload/post_image'`,
        // url: `http://179.174.5.138:8000/app/v1/upload/post_image'`,
        url: `http://138.68.249.148:8000/app/v1/upload/post_image`,
        allowedMimeType: allowedMimeType,
        headers: [
          {
            name: 'Authorization',
            value: `Bearer ${authKey}`
          },
          {
            name: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            name: 'Access-Control-Allow-Credentials',
            value: 'true'
          }
        ]
      });
    }
    return this.fileUploader;
  }

  /**
   * Publica a imagem no servidor e retorna uma string com a URL da imagem
   * @returns {Promise<string>}
   */
  publishImage(): Promise<string>{
    return new Promise<string>(async (resolve, reject) => {
      // resolve("http://www.imgglobalinfotech.com/images/single-pages/banner-design.png");
      //TODO: descomentar quando estiver pronto
      this.fileUploader.onBuildItemForm = (fileItem: any, form: any) => {
        fileItem.alias = "image_file";
        form.append('post_id', '2');
      };
      this.fileUploader.uploadItem(this.getLastFile());
      this.fileUploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        // {"message": "Upload realizado com sucesso", "filename": "/media/post_2_image.jpg"}}
        // const responsePath = JSON.parse(response);
        console.log(response);// the url will be in the response
        // resolve(responsePath);
      };
      this.fileUploader.onErrorItem = (item: any, response: any, status: any, headers: any) => {
        console.log(response);
      }
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
