import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import {ToolbarState} from "@app/components/toolbar/TollbarState";

@Injectable()
export default class ViewPostViewModel{

  postToolbarState = ToolbarState.ALL_ITEMS;

  /**
   * Left Bar
   */
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];

  /**
   * Post
   */
  postImageUrl: string = "https://www.comunilog.com/sites/default/files/styles/noticias/public/field/image/matrizeisenower.png?itok=T4ua3ySO";
  title: string = "Mock título";
  tags: Array<string> = ['tag 1', 'tag 2', 'tag 3', 'tag 4'];
  estimatedMinutes: string = (90/60).toFixed(1);
  postHtmlText: string = "<h1>HTML Ipsum Presents</h1>\n" +
    "\n" +
    "<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n" +
    "\n" +
    "<h2>Header Level 2</h2>\n" +
    "\n" +
    "<ol>\n" +
    "   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n" +
    "   <li>Aliquam tincidunt mauris eu risus.</li>\n" +
    "</ol>\n" +
    "\n" +
    "<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>\n" +
    "\n" +
    "<h3>Header Level 3</h3>\n" +
    "\n" +
    "<ul>\n" +
    "   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n" +
    "   <li>Aliquam tincidunt mauris eu risus.</li>\n" +
    "</ul>";

}


