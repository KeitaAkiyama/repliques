import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public replique : Array<{libelle : string,nom : string,pre: string, date : string}>
  
  constructor 
    (public navCtrl: NavController, public navParams: NavParams, public sqlPrd: RemoteSqlProvider) {    
  this.replique = [];

  
  
  }
  btnreq(){
    this.replique = [];
   this.sqlPrd.select("SELECT libelle,nom,pre,date FROM quotes,prof WHERE quotes.idprof = prof.id",null,this.replique);
   
  }
}

