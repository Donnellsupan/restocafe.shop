import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { GenericService } from 'src/app/services/http-service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export default class MyProfileComponent implements OnInit {
  form: FormGroup;
  error: any;

  constructor(private httpService: GenericService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
      newPassword: new FormControl(''),
      newUsername: new FormControl('')
    });

    this.form.patchValue({
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email')
    });
  }

  save() {
    this.httpService
      .post('user/Save', this.form.value)
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
      });
  }
}
