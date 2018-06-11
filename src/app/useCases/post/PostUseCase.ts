import {Injectable} from "@angular/core";
import PostRepository from "@app/data/post/PostRepository";
import AuthRepository from "@app/data/auth/AuthRepository";
import {PostInputBoundary, PostInputModel} from "@app/useCases/post/PostInputBoundary";
import {PostOutputBoundary, PostOutputModel} from "@app/useCases/post/PostOutputBoundary";
import {
  PostComment,
  PostCommentOutputBoundary,
  PostCommentOutputModel
} from "@app/useCases/post/PostCommentOutputBoundary";

@Injectable()
export default class PostUseCase implements PostInputBoundary {

  private loremIpsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate non nibh eu rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar mi at massa tempor egestas. Nunc fermentum est eu tellus efficitur aliquet quis hendrerit arcu. Donec facilisis pretium dictum. Proin lectus ex, semper id sapien eget, interdum sagittis sapien. Sed blandit ex ac mi ultricies, a viverra augue pharetra. Nam et ligula a ligula laoreet consectetur quis eget elit. Ut at molestie neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum mauris quis posuere tempor. In ornare vulputate nisi sed faucibus. Suspendisse vitae vulputate lacus, eu malesuada justo. Praesent fermentum, mi id commodo porttitor, est est rhoncus lacus, eu dictum justo tortor at ante. Maecenas tincidunt, velit at pulvinar dignissim, sapien ex fermentum lacus, id hendrerit erat urna vitae nunc.<br/>" +
    "<br/>" +
    "Donec a lobortis nisi, id volutpat erat. Ut porta vestibulum malesuada. Cras nec dolor ac ipsum pellentesque placerat at ac dolor. Aliquam finibus ac ligula sit amet varius. Donec libero lectus, blandit in magna a, cursus finibus odio. Pellentesque viverra enim a dui pellentesque malesuada a sit amet diam. Nullam eleifend dictum quam nec eleifend. Donec eu nibh id magna pulvinar maximus sed vel ligula. Curabitur consectetur dolor sed semper vehicula. In eu sodales ante. Sed nec consequat risus. Suspendisse posuere, ipsum eu aliquet blandit, purus purus finibus justo, semper aliquet odio metus at magna. Morbi et tincidunt ipsum. Aenean vel interdum risus, non finibus est. Nullam dui diam, ornare eu tristique at, venenatis non nisi. Mauris suscipit massa dictum, ornare tellus ac, tincidunt sem.<br/>" +
    "<br/>" +
    "Vivamus ultricies quis sapien eget bibendum. Nulla dignissim, lectus non tempus pharetra, leo dui lacinia diam, sed placerat est neque eu turpis. Nullam consectetur mauris nulla, et congue urna iaculis sed. Praesent et consequat erat, in lacinia magna. Cras quis eleifend dolor. Nam scelerisque tortor eu metus malesuada eleifend. In hac habitasse platea dictumst. Maecenas in ornare libero, eu eleifend dui. Maecenas porta urna sit amet dapibus mollis. Sed nec iaculis odio. Sed accumsan ex quis augue eleifend, sit amet tincidunt nibh tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>" +
    "<br/>" +
    "Proin convallis placerat velit et feugiat. Suspendisse non accumsan eros. Ut fermentum sagittis pellentesque. In finibus tortor justo, sed ultricies erat maximus ut. Pellentesque risus ex, dignissim vitae enim non, pellentesque egestas erat. Morbi consectetur nisl nisi, nec luctus quam tincidunt eu. Pellentesque nec maximus augue, eget vehicula ligula. Vestibulum finibus odio ut blandit ullamcorper. Duis eget suscipit nunc.<br/>" +
    "<br/>" +
    "Aliquam vitae lectus maximus magna dapibus pretium. In velit lacus, ornare at turpis sit amet, pellentesque vulputate ante. Proin ac lectus enim. Sed ac elit tristique, elementum elit non, vehicula mauris. Phasellus commodo lorem tristique consectetur vestibulum. Mauris et justo nec quam bibendum sodales. Sed nec consectetur mauris. Aenean vitae sem a sapien malesuada blandit. Mauris non auctor mauris. Quisque cursus pretium imperdiet. Pellentesque facilisis justo vitae velit dapibus laoreet. Morbi id tortor ac lorem viverra egestas.";

  constructor(private postRepository: PostRepository,
              private authRepository: AuthRepository) {
  }


  async retrievePostData(postInputModel: PostInputModel, outputBoundary: PostOutputBoundary) {
    const outputModel: PostOutputModel = new PostOutputModel();

    try {
      const authkey = await this.authRepository.getKey();
      const post = await this.postRepository.getPost(authkey, postInputModel.username, postInputModel.postId);

      const outputTags: Array<string> = post.tags.map(it => it.name);

      outputModel.title = post.title;
      outputModel.tags = outputTags;
      outputModel.estimateTime = post.estimatedTime;
      outputModel.text = this.loremIpsum;
      outputModel.bannerImage = post.headerImage;
      outputBoundary.onGetPostDataSuccess(outputModel);
    } catch (err) {
      outputBoundary.onGetPostDataError(err);
    }

  }

  async retrievePostComments(postInputModel: PostInputModel, outputBoundary: PostCommentOutputBoundary) {
    const outputModel: PostCommentOutputModel = new PostCommentOutputModel();
    try {
      const authkey = await this.authRepository.getKey();
      const comments = await this.postRepository.getPostComments(authkey, postInputModel.username, postInputModel.postId);

      outputModel.comments = comments.map(it => {
        let output = new PostComment();

        output.avatar = it.author.avatar;
        output.user = it.author.username;
        output.username = it.author.id;
        output.date = it.publish;
        output.text = it.text;

        return output;
      });
      outputBoundary.onGetPostCommentSuccess(outputModel);
    } catch (err) {
      outputBoundary.onGetPostCommentError(err);
    }


  }
}
