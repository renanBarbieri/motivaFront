import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './newPasswordDialogView.html',
  styleUrls: ['./newPasswordDialogStyle.css']
})
export class NewPasswordDialogComponent  {

  passwordModel: any = {};

  @Output()
  passwordValidated = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<NewPasswordDialogComponent>) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if(this.matchPassword(this.passwordModel.new, this.passwordModel.confirm)) {
        this.dialogRef.close(this.passwordModel.new);
      }
      else {
        alert("A confirmação de senha não é igual à senha fornecida");
      }
    }
  }

  matchPassword(psw1: string, psw2: string) {
    return psw1 == psw2;
  }

}
