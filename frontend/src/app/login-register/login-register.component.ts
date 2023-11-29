import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  firstname: string= "";
  lastname: string = "";
  email: string= "";
  password: string= "";

  constructor(private http: HttpClient)
  {

  }

  ngOnit(): void{

  }

  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname":this.lastname,
      "email":this.email,
      "password":this.password

    };
    this.http.post("http://localhost:3005/user/create",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("Student Registered Successfully");
    });
  }

  save()
  {
    this.register();
  }

}
