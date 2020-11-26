import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private uS: UsersService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(loginForm: FormGroup) {
    this.uS.login(loginForm.value.username, loginForm.value.password).subscribe(
      (val) => {
        console.log('val', val);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
