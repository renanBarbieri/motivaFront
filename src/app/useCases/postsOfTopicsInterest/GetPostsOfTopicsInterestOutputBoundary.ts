export interface GetPostsOfTopicsInterestOutputBoundary{
  onGetPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel);
  onGetPostsOfTopicsInterestError(errorData: any);
}

export class GetPostsOfTopicsInterestOutputModel{
  public tagPostsMap: Map<string, Array<PostCardModel>>;
}


export class PostCardModel{
  entityReference: string;
  imageThumbnail: string;
  userAvatar: string;
  userName: string;
  title: string;
  subtitle: string;
  stars: number;
  favs: number;
  publishDate: string;
}
