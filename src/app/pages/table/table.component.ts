import { Component, OnInit } from '@angular/core';
import { Profil } from '../../interfaces/profil';
import { AuthService } from  '../../services/auth.service';
import Swal from 'sweetalert2'
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{



    listDesFavories : Array<Profil> = [];
    


    constructor(private authService: AuthService){}
chatter(){
    Swal.fire({
        icon: 'success',
        title: "Fonctionnalité en cours de développement!",
        text:  "Cette fonctionnalité n'est pas encre disponible",
      }) 
}    

    ngOnInit(){


    this.listDesFavories = this.authService.initListFavories()


    }
}
