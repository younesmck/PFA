import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ETUDIANTS } from '../../../lib/Etudiants.js';
import { FILIERE, NIVEAU } from '../../../lib/enum';
import { ANNEE } from '../../../lib/enum';


Template.home.onCreated(function helloOnCreated() {
  $('input[name="filiere"]').append('<option>test</option>');
  });
  
  Template.home.helpers({
    filieres(){
      return FILIERE.filieres;
    },annees(){
      return ANNEE.annees;
    },niveaux(){
      return NIVEAU.niveaux;
    }

  });
  
  Template.home.events({
    'submit .ajouterEtudiant'(event, instance) {
      event.preventDefault();

        ETUDIANTS.insert({
          matricule: event.target.matricule.value,
          nom: event.target.nom.value,
          prenom: event.target.prenom.value,
          email: event.target.email.value,
          gsm: event.target.gsm.value,
          filiere:event.target.filiere.value,
          annee:event.target.annee.value,
          niveau: event.target.niveau.value
        });
        FlowRouter.go('/liste');
      
    
  
    event.target.matricule.value = '';
    event.target.nom.value = '';
    event.target.prenom.value = '';
    event.target.email.value = '';
    event.target.gsm.value = '';
    event.target.modifier.value = '';
  
    },'click .btnDelete'(){
      STAGIAIRES.remove(this._id);
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
    }
  });
  