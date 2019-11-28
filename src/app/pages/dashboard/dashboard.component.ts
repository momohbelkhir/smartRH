import { Component, OnInit } from '@angular/core';

import { Profil } from '../../interfaces/profil';
import { AuthService } from  '../../services/auth.service';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule} from  '@angular/forms';
import { NgModule }                                 from '@angular/core';
import { CommonModule }                             from '@angular/common';
import Swal from 'sweetalert2'

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
/*@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent
  ]
})*/
export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  listProfils : Array<Profil> = [];
  listProfilsPrincipal : Array<Profil> = [];

  public rechercheForm: FormGroup;
  public isSubmitted : Boolean;

  get formControls() { return this.rechercheForm.controls; }
  constructor(private authService: AuthService,private formBuilder: FormBuilder){}
    ngOnInit(){

   this.listProfils = []

   this.listProfils = this.authService.createListProfils()
   this.listProfilsPrincipal = this.listProfils;  

   console.log(this.listProfils)

    }
    addToFavories(profil){
      console.log(profil)
      this.authService.ajouterUnFavories(profil)
      Swal.fire({
        icon: 'success',
        title: 'Ajouté à la liste des favoris!',
        text: "",
      })
    }
    onSearchChange(searchValue: string): void {  
      console.log(searchValue);
      let profilsSearched  : Array<Profil> = [];
      for(let i=0; i< this.listProfilsPrincipal.length; i++){
        
        if(this.listProfilsPrincipal[i].competence.toLowerCase() == searchValue.toLowerCase () ){
          console.log(this.listProfilsPrincipal[i].competence.toLowerCase)
          console.log(searchValue.toLowerCase )
          profilsSearched.push(this.listProfilsPrincipal[i])
        }
      }
      if(profilsSearched.length >0){
        this.listProfils = profilsSearched
      }else{
        this.listProfils = this.listProfilsPrincipal
      }
    }
    initRechercheForm(){
      this.isSubmitted  =  false;
      this.rechercheForm  =  this.formBuilder.group({
        recherche: ['', Validators.required],
       
    });
    }
}
