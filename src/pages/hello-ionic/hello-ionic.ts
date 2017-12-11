import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public replique : Array<{libelle : string,nom : string,pre: string, date : string}>
  public maxid : Array<{idprof : number}>;

  constructor 
    (public navCtrl: NavController, public navParams: NavParams, public sqlPrd: RemoteSqlProvider) {    
  this.replique = [];
  this.maxid = [];
  
  
  }
  btnreq(){
   
   this.replique = [];
   
   
   do this.sqlPrd.select("SELECT libelle,nom,pre,date FROM quotes,prof WHERE idprof=prof.id and prof.id = ROUND(RAND()*prof.id)+1 Limit 1",null,this.replique); 
   while (this.replique[0]==null)
   
   
   
  }
}

