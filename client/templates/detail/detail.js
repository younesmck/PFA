import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Etudiants, ETUDIANTS } from '../../../lib/Etudiants.js';
import { FILIERE } from '../../../lib/enum';
import { ANNEE } from '../../../lib/enum';
import { Mongo } from 'meteor/mongo';


Template.detail.onCreated(function helloOnCreated() {

  });
  
  Template.detail.helpers({
    stagiaires(){
      return STAGIAIRES.find({});
    },filieres(){
      return FILIERE.filieres;
    },annees(){
      return ANNEE.annees;
    },etudiant(){
      return ETUDIANTS.find({_id:FlowRouter.getParam("_id")}).fetch()[0];
    },equals(a,b){
      return a===b;
    }

  });
  
  Template.registerHelper('equals',(a,b)=>{
    return a===b;
  })

  Template.detail.events({
    'submit .detailEtudiant'(event, instance) {
      event.preventDefault();
      ETUDIANTS.update({_id:FlowRouter.getParam("_id")},{
          matricule: event.target.matricule.value,
          nom: event.target.nom.value,
          prenom: event.target.prenom.value,
          email: event.target.email.value,
          gsm: event.target.gsm.value
        });
      
      
    
  
    event.target.matricule.value = '';
    event.target.nom.value = '';
    event.target.prenom.value = '';
    event.target.email.value = '';
    event.target.gsm.value = '';
    event.target.modifier.value = '';
  
    },'click .btnDelete'(){
      STAGIAIRES.remove(this._id);
    },'click .addStage'(){
      FlowRouter.go('/stage/'+FlowRouter.getParam("_id"));
    },'click [name="Vider"]'(){
      event.target.matricule.value = '';
    event.target.nom.value = '';
    event.target.prenom.value = '';
    event.target.email.value = '';
    event.target.gsm.value = '';
    event.target.modifier.value = '';
    },'click .btnDetails'(){
      $('input[name="matricule"]').val(this.matricule);
      $('input[name="nom"]').val(this.nom);
      $('input[name="prenom"]').val(this.prenom);
      $('input[name="email"]').val(this.email);
      $('input[name="gsm"]').val(this.gsm);
      $('input[name="modifier"]').val(this._id);
    },'change [name="upload"]'(event,template){
      Papa.parse( event.target.files[0], {
        header: true,
        complete( results, file ) {
          for ( let i = 0; i < results.data.length; i++ ) {
            let item   = results.data[ i ];
      
              STAGIAIRES.insert( item );
          }

              alert("Fin");
        }
      });
    }
  });
  