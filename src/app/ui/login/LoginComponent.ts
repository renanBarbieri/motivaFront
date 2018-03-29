import {Component, OnInit} from "@angular/core";
import {NgForm} from '@angular/forms';
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import {UIContract} from "@app/useCases/UIContract";
import LoginController from "@app/ui/login/LoginController";
import LoginPresenter from "@app/ui/login/LoginPresenter";


@Component({
  selector: 'app-login',
  templateUrl: './LoginView.html',
  styleUrls: ['./LoginStyle.css'],
  providers: [
    { provide: LoginController, useClass: LoginController },
    { provide: LoginPresenter, useClass: LoginPresenter },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
  ]
})
export class LoginComponent implements OnInit, UIContract{

  loginModel: any = {};

  constructor(private loginController: LoginController,
              private loginPresenter: LoginPresenter){}

  ngOnInit(){
    this.loginPresenter.onViewInit(this);
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.loginModel);
      this.loginController.makeLogin(this.loginModel.username, this.loginModel.password, this.loginPresenter);
    }
  }


  showErrorAlert(message: String) {
    alert(message);
  }
}
