import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
    public replique: Array<{ profid: number, libelle: string, nom: string, pre: string }>
    public repliquetemp: Array<{ profid: number, libelle: string, nom: string, pre: string }>
    public selectprof: Array<{ id: number, nom: string, pre: string }> 
    public reqprof: Array<{id : number,profid: number, libelle: string, nom: string, pre: string, date: string}>
    public unProf: number;
    public change_valeur() {
    
    
 
}

    constructor
        (public navCtrl: NavController, public navParams: NavParams, public sqlPrd: RemoteSqlProvider) {
        this.replique = [];
        this.selectprof = [];
        this.reqprof = [];
        this.sqlPrd.select("SELECT id,nom,pre FROM prof", null, this.selectprof);
        this.repliquetemp = [];
        this.unProf=0;
        }

    btnreq() {
        this.replique = [];
        this.sqlPrd.select("SELECT libelle,nom,pre,date FROM quotes AS q1 JOIN (SELECT CEIL(RAND() * (SELECT MAX(id) FROM quotes)) AS id) AS q2 INNER JOIN prof ON q1.idprof = prof.id WHERE  q1.id >= q2.id ORDER BY q1.id ASC LIMIT 1", null, this.replique);
        
    }
    
    btnprof() {
        document.getElementById("random")
        this.repliquetemp =[];
        this.sqlPrd.select("SELECT idprof,libelle,nom,pre FROM quotes,prof WHERE quotes.idprof = prof.id AND quotes.idprof =? ORDER BY quotes.id ASC", [this.unProf], this.repliquetemp).then((data)=>
        {
        var taille = this.repliquetemp.length;
        console.log(taille);
        if(this.unProf!=0)
        { 
            if(this.repliquetemp.length>1){
            this.reqprof = [];
            this.sqlPrd.select("SELECT libelle,nom,pre FROM quotes AS q1 JOIN (SELECT CEIL(RAND() * (SELECT MAX(id) FROM quotes)) AS id) AS q2  INNER JOIN prof ON q1.idprof = prof.id WHERE  q1.id >= q2.id AND q1.idprof =? ORDER BY q1.id ASC LIMIT 1 ", [this.unProf], this.reqprof);     

            }
            else
            {
            this.reqprof=[];
            this.sqlPrd.select("SELECT libelle,nom,pre FROM quotes,prof prof WHERE quotes.idprof = prof.id AND quotes.idprof =? ORDER BY quotes.id ASC Limit 1", [this.unProf], this.reqprof); 
            }
        }

        });    
    }
        
        
}


