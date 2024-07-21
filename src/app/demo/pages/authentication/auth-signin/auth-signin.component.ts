import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs';
import { GenericService } from 'src/app/services/http-service';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent implements OnInit {
  form: FormGroup;
  error: any;
  /**
   *
   */
  constructor(
    private router: Router,
    private httpService: GenericService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.httpService
      .post('user/login', this.form.value)
      .pipe(
        catchError((err) => {
          this.error = err.error;
          throw err;
        })
      )
      .subscribe((resp) => {
        localStorage.setItem('token', resp.key);
        localStorage.setItem('firstName', `${resp.firstName}`);
        localStorage.setItem('lastName', `${resp.lastName}`);
        localStorage.setItem('email', `${resp.email}`);
        this.router.navigate(['dashboard']);
      });
  }
}
