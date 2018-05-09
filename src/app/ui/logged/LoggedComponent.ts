import LoggedPageController from "@app/ui/logged/LoggedPageController";
import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";

export default class LoggedComponent {
  constructor(private loggedController: LoggedPageController){}

  openProfilePage(): void {
    this.loggedController.goToProfile()
  }

  openFavoritesPage(): void {
    this.loggedController.goToFavorites();
  }

  openSettingsPage(): void {
    this.loggedController.goToSettings();
  }

  openNewPostPage() {
    this.loggedController.goToNewPost();
  }

  openHomePage(): void {
    this.loggedController.goToHome();
  }

  openSearchPage(): void {
    this.loggedController.goToSearch();
  }

  logout(outputBoundary: AuthOutputBoundary): void {
    this.loggedController.makeLogout(outputBoundary);
  }
}
