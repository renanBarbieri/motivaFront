import LoggedPageController from "@app/ui/logged/LoggedPageController";

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
}
