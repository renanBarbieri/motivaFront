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

  onSubmit(form: NgForm){
    if(form.valid){
      console.log("validado");
      console.log(form.value);
    }
    else{
      console.log("faltou algo");
    }
  }

}
