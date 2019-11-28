

export class Profil {
    emailRH : String
    nom : string;
    prenom : string;
    email : string;
    domaine : string
    competence: string;

    constructor(nom : string, prenom : string, email : string , domaine : string, competence: string){
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.domaine = domaine
        this.competence = competence
    }
}
