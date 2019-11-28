import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    nom : string
    prenom : string
    email : string

    ngOnInit(){
        this.nom = localStorage.getItem('nom')
        this.prenom = localStorage.getItem('prenom')
        this.email = localStorage.getItem('email')
        
    }
}
