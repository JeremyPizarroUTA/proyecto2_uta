import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BasicTableService {

    private tabla:Table[]=[

    {
        nombre1:"Deshmukh",
        nombre2:"Prohaska",
        user:"@Genelia",
        rol:"admin"
    },
    {
        nombre1:"Deshmukh",
        nombre2:"GayLord",
        user:"@Ritesh",
        rol:"member"
    },
    {
        nombre1:"Sanghani",
        nombre2:"Gusikowski",
        user:"@Govinda",
        rol:"developer"
    },
    {
        nombre1:"Roshan",
        nombre2:"Rogahn",
        user:"@Hritik",
        rol:"supporter"
    },
    {
        nombre1:"Joshi",
        nombre2:"Hickle",
        user:"@Maruti",
        rol:"member"
    },
    {
        nombre1:"Nigam",
        nombre2:"Eichmann",
        user:"@Sonu",
        rol:"supporter"
    },

    ]
    constructor(){
        console.log("Servicio Dashboard listo para usarse...")
    }

    getTable():Table[]{
        return this.tabla;
    }
}

export interface Table{

    nombre1:string;
    nombre2:string;
    user:string;
    rol:string;
}