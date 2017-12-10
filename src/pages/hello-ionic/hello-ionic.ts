import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
    public replique: Array<{ profid: number, libelle: string, nom: string, pre: string, date: string }>
    public selectprof: Array<{ id: number, nom: string, pre: string }> 
    public reqprof: Array<{profid: number, libelle: string, nom: string, pre: string, date: string}>

    public change_valeur() {
    
    
 
}

    constructor
        (public navCtrl: NavController, public navParams: NavParams, public sqlPrd: RemoteSqlProvider) {
        this.replique = [];
        this.selectprof = [];
        this.reqprof = [];
        this.sqlPrd.select("SELECT nom,pre FROM prof", null, this.selectprof);
        }

   
    
	
   


    btnreq() {
        this.replique = [];
        this.sqlPrd.select("SELECT libelle,nom,pre,date FROM quotes AS q1 JOIN (SELECT CEIL(RAND() * (SELECT MAX(id) FROM quotes)) AS id) AS q2 INNER JOIN prof ON q1.idprof = prof.id WHERE  q1.id >= q2.id ORDER BY q1.id ASC LIMIT 1", null, this.replique);
        
    }
    
    btnprof() {
        
        var selectElmt = document.getElementById("select");
        
        this.reqprof = [];
        this.sqlPrd.select("SELECT libelle,nom,pre FROM quotes AS q1 JOIN (SELECT CEIL(RAND() * (SELECT MAX(id) FROM quotes)) AS id) AS q2  INNER JOIN prof ON q1.idprof = prof.id WHERE  q1.id >= q2.id AND q1.idprof = 2 ORDER BY q1.id ASC LIMIT 1 ", null, this.reqprof); 

    }
        
        
}


