import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs';
import { GenericService } from 'src/app/services/http-service';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export default class AuthSignupComponent implements OnInit {
  form: FormGroup;
  error: any = '';
  /**
   *
   */
  constructor(
    private router: Router,
    private httpService: GenericService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signUp() {
    this.httpService
      .post('user/SignUp', this.form.value)
      .pipe(
        catchError((err) => {
          this.error = err.error;
          throw err;
        })
      )
      .subscribe((resp) => {
        localStorage.setItem('firstName', `${resp.firstName}`);
        localStorage.setItem('lastName', `${resp.lastName}`);
        localStorage.setItem('email', `${resp.email}`);
        this.router.navigate(['dashboard']);
        console.log(resp);
      });
  }
}
