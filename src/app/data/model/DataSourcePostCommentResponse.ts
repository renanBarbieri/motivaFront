import DataSourcePostComment from "@app/data/model/DataSourcePostComment";

export default class DataSourcePostCommentResponse {
  comments: Array<DataSourcePostComment>;
  page: number;
}
