import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../interfaces/user';
import { AuthService } from  '../../services/auth.service';
import Swal from 'sweetalert2'
import { Rh } from 'app/interfaces/rh';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

 
  public registerForm: FormGroup;
  public isSubmitted : Boolean;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  get formControls() { return this.registerForm.controls; }

  ngOnInit() {
    this.initRegisterForm()
  }

register(){
  
   let rh = new Rh()
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log("register mail : "+this.formControls.email.value);
    console.log("register password : "+this.formControls.password.value);
    rh.email = this.formControls.email.value
    rh.nom = this.formControls.nom.value
    rh.password = this.formControls.password.value
    rh.prenom = this.formControls.prenom.value
     this.authService.addUser(rh)
     
    Swal.fire({
      icon: 'success',
      title: 'Votre compte a été créer !',
      text: "Vous allez être rediriger vers l'ecran de connexion",
    })
    this.router.navigateByUrl('/login');
  }
  initRegisterForm(){
    this.isSubmitted  =  false;
    this.registerForm  =  this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
}
