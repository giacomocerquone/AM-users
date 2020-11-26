import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

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

  constructor(private uS: UsersService) {}

  onSubmit() {
    this.uS.signup(this.signupData).subscribe(
      (val) => {
        console.log(val);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
