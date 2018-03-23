import {AfterViewInit, Component, OnInit} from '@angular/core';
import AuthViewModel from "@app/ui/auth/AuthViewModel";
import {ScreenState} from "@app/ScreenState";

@Component({
  selector: 'app-auth',
  templateUrl: './AuthView.html',
  styleUrls: ['./AuthStyle.css'],
  providers: [
    { provide: AuthViewModel, useClass: AuthViewModel },
  ]
})
export class AuthComponent implements OnInit, AfterViewInit{

  private thisState = ScreenState;

  constructor(private authViewModel: AuthViewModel){}

  ngOnInit(){
    this.authViewModel.logged = false;
  }


  ngAfterViewInit(): void {
    setTimeout(() => this.authViewModel.state = ScreenState.DONE, 1000);
  }
}
