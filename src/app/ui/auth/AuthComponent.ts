import {Component, OnInit} from '@angular/core';
import AuthViewModel from "@app/ui/auth/AuthViewModel";
import {ScreenState} from "@app/ui/ScreenState";
import AuthController from "@app/ui/auth/AuthController";
import AuthPresenter from "@app/ui/auth/AuthPresenter";
import {AuthUiView} from "@app/ui/auth/AuthUIView";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";

@Component({
  selector: 'app-auth',
  templateUrl: './AuthView.html',
  styleUrls: ['./AuthStyle.css'],
  providers: [
    {provide: AuthViewModel, useClass: AuthViewModel},
    {provide: AuthController, useClass: AuthController},
    {provide: AuthPresenter, useClass: AuthPresenter},
    {provide: AuthUseCase, useClass: AuthUseCase},
  ]
})

export class AuthComponent implements AuthUiView, OnInit {

  public thisState = ScreenState;

  constructor(private authViewModel: AuthViewModel,
              private authController: AuthController,
              private authPresenter: AuthPresenter) {
  }

  ngOnInit() {
    this.authViewModel.state = ScreenState.LOADING_STATE;
    this.authPresenter.onViewInit(this);
    this.authController.verifyAuthorization(this.authPresenter);
  }

  updateScreenState(state: ScreenState) {
    this.authViewModel.state = state;
  }

  updateLoggedStatus(logged: boolean) {
    this.authViewModel.logged = logged;
    this.authViewModel.state = ScreenState.DONE;
  }

  showErrorAlert(message: String) {
    alert(message);
    this.authViewModel.state = ScreenState.DONE;
  }
}
