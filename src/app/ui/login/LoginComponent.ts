import {Component} from "@angular/core";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './LoginView.html',
  styleUrls: ['./LoginStyle.css'],
  providers: [
  ]
})
export class LoginComponent {

  loginModel: any = {}

  onSubmit(form: NgForm){
    if(form.valid){
      //TODO: enviar para a próxima camada o login e a senha
      console.log("validado");
      console.log(this.loginModel);
    }
  }

}
