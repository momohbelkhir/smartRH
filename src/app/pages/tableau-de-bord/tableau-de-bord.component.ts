import { Component, OnInit } from '@angular/core';
import { Profil } from '../../interfaces/profil';
import { AuthService } from  '../../services/auth.service';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule} from  '@angular/forms';
@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})


                      
export class TableauDeBordComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  listProfils : Array<Profil> = [];
  public rechercheForm: FormGroup;
  public isSubmitted : Boolean;
  get formControls() { return this.rechercheForm.controls; }
  constructor(private authService: AuthService,private formBuilder: FormBuilder){}
    ngOnInit(){

   this.listProfils = []
   this.listProfils = this.authService.createListProfils()
   console.log(this.listProfils)

    }

    initRechercheForm(){
      this.isSubmitted  =  false;
      this.rechercheForm  =  this.formBuilder.group({
        recherche: ['', Validators.required],
       
    });
    }
}

