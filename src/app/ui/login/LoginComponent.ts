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
      console.log("validado");
      console.log(this.loginModel);
    }
    else {
      console.log(form);
      console.log(this.loginModel);
      console.log("algo errado");
    }
  }

}
