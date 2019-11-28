
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../interfaces/user';
import { AuthService } from  '../../services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted : Boolean;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
    this.initLoginForm()
  }

login(){
  let user = new User()
    console.log(this.loginForm.value);
    localStorage.setItem("emailRH", this.formControls.email.value)
    localStorage.setItem("password", this.formControls.password.value)
    user.email =  this.formControls.email.value
    user.password = this.formControls.password.value
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.authService.login(user)){
      Swal.fire({
        icon: 'success',
        title: 'Connexion réussis!',
        text: "Vous allez être rediriger vers le tableau de bord",
      })
      this.router.navigateByUrl('/dashboard');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Connexion échouée!',
        text: "Veuillez réessayez !",
      })
    }
   
  }
  initLoginForm(){
    this.isSubmitted  =  false;
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
}
