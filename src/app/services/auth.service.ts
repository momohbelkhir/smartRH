import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Rh } from '../interfaces/rh';
import { Profil } from '../interfaces/profil';
import {Router} from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //listUtilisateurs : any []
 listUtilisateurs : Array<any> = [];
 listProfils : Array<Profil> = [];
 listDesFavories : Array<Profil> = [];

 
  constructor(private router : Router) { }

  public ajouterUnFavories(profil : Profil ) : Array<Profil>{
    let user = this.listDesFavories.find(x => x.email == profil.email)
    if(user == undefined || user == null){
      profil.emailRH = localStorage.getItem("emailRH")
      this.listDesFavories.push(profil)
      console.log(this.listDesFavories)
      return this.listDesFavories
    }else if( user.emailRH == localStorage.getItem("emailRH")){
      return this.listDesFavories
    }else if(user.emailRH != localStorage.getItem("emailRH")){
      profil.emailRH = localStorage.getItem("emailRH")
      this.listDesFavories.push(profil)
      return this.listDesFavories
    }
  
  }
 
  public initListFavories(){
   let list : Array<Profil> = [];
    for(let i =0; i<this.listDesFavories.length;i++){
      console.log("//////")
      console.log(this.listDesFavories[i].emailRH)
      console.log(localStorage.getItem("emailRH"))
      console.log("//////")
      if(this.listDesFavories[i].emailRH == localStorage.getItem("emailRH")){
          list.push(this.listDesFavories[i])
      }
  }
    return list
  }

  public createListProfils() : Array<Profil>  {
    this.listProfils = []
    let profil = new Profil("Leroi","Stéphane","stephane@leroi.com", "Informatique", "Angular");
    this.listProfils.push(profil)
    profil = new Profil("Dupont","Jack","jack@dupont.com","Informatique","PHP Symphony");
    this.listProfils.push(profil)
    profil = new Profil("Rocu","Toma","toma@rocu.com","Informatique","JEE");
    this.listProfils.push(profil)
    profil = new Profil("Spark","Lucie","lucie@spark.com","Informatique","Spring boot");
    this.listProfils.push(profil)
    profil = new Profil("Dero","Ben","ben@dero.com","Informatique","Dev mobile");
    this.listProfils.push(profil)
    return this.listProfils
  }

  public login(userInfo: User): boolean{
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    let user = this.listUtilisateurs.find(x => x.email == userInfo.email);
    if(user !== undefined && user.password == userInfo.password){
      localStorage.setItem("nom", user.nom)
      localStorage.setItem("prenom", user.prenom)
      return true;
    }else{
      return false;
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigateByUrl('/login');
  }

  public addUser(user){
    this.listUtilisateurs.push(user)
    console.log(this.listUtilisateurs)
  }
}


