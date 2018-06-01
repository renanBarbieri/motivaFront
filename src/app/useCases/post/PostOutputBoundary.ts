export interface PostOutputBoundary {

  onGetPostDataSuccess(postOutput: PostOutputModel);

  onGetPostDataError(err: any);
}

export class PostOutputModel {
  title: string;
  estimateTime: number;
  tags: Array<string>;
  text: string;
  bannerImage: string;
}
