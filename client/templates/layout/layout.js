import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Etudiants, ETUDIANTS } from '../../../lib/Etudiants.js';
import { FILIERE } from '../../../lib/enum';
import { ANNEE } from '../../../lib/enum';


Template.layout.onCreated(function helloOnCreated() {
  $('input[name="filiere"]').append('<option>test</option>');
  });
  
  Template.layout.helpers({
    filieres(){
      return FILIERE.filieres;
    },annees(){
      return ANNEE.annees;
    }

  });
  
  Template.layout.events({
    'submit .ajouterEtudiant'(event, instance) {
      event.preventDefault();
      if(event.target.modifier.value!=""){
        STAGIAIRES.update({_id:event.target.modifier.value},{
          matricule: event.target.matricule.value,
          nom: event.target.nom.value,
          prenom: event.target.prenom.value,
          email: event.target.email.value,
          gsm: event.target.gsm.value
        });
      }
      else{
        ETUDIANTS.insert({
          matricule: event.target.matricule.value,
          nom: event.target.nom.value,
          prenom: event.target.prenom.value,
          email: event.target.email.value,
          gsm: event.target.gsm.value,
          filiere:event.target.filiere.value,
          annee:event.target.annee.value
        });
      }
      
    
  
    event.target.matricule.value = '';
    event.target.nom.value = '';
    event.target.prenom.value = '';
    event.target.email.value = '';
    event.target.gsm.value = '';
    event.target.modifier.value = '';
  
    },'click .btnDelete'(){
      STAGIAIRES.remove(this._id);
    },'click .ajout'(){
      FlowRouter.go("/ajout");
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
  