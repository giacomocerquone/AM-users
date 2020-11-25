import { Component, OnInit } from '@angular/core';

type signupDataType = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupData: signupDataType = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
