import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ETUDIANTS } from '../../../lib/Etudiants.js';
import { ENTREPRISES } from '../../../lib/Entreprises.js';
import { FILIERE } from '../../../lib/enum';
import { ANNEE,NIVEAUSTAGE } from '../../../lib/enum';
import { ENCADRANTS } from '../../../lib/Encadrants.js'


Template.stage.onCreated(function helloOnCreated() {
  $('input[name="filiere"]').append('<option>test</option>');
  });
  
  Template.stage.helpers({
    etudiants(){
      return ETUDIANTS.find({});
    },filieres(){
      return FILIERE.filieres;
    },annees(){
      return ANNEE.annees;
    },etudiant(){
      return ETUDIANTS.find({_id:FlowRouter.getParam("_id")}).fetch()[0];
    },entreprises(){
      return ENTREPRISES.find({});
    },encadrants(){
      return ENCADRANTS.find({});
    },niveaustages(){
      return NIVEAUSTAGE.niveaustages;
    }

  });
  
  Template.stage.events({
    'submit .ajouterStage'(event, instance) {
      event.preventDefault();
      var entreprise;
      if(event.target.test.value=="new"){
        entreprise={
          raisonSocial:event.target.raisonSocial.value,
          ville:event.target.ville.value,
          pays:event.target.pays.value,
          adresse:event.target.adresse.value,
          tel:event.target.tel.value
        };
        ENTREPRISES.insert(entreprise);
      }else{
        var e =event.target.entreprise.value;
        entreprise=ENTREPRISES.find({raisonSocial:e}).fetch()[0];
      }
      console.log(entreprise);
      ETUDIANTS.update({_id:FlowRouter.getParam("_id")},
      {
        $addToSet: { Stages: {
          sujet:event.target.sujet.value,
          debut:event.target.dateDebut.value,
          fin:event.target.dateFin.value,
          emailEncadrant:event.target.emailEncadrant.value,
          nomEncadrant:event.target.nomEncadrant.value,
          gsmEncadrant:event.target.gsmEncadrant.value,
          niveaustage:event.target.niveaustage.value,
          entreprise:entreprise
        } }
      }
      )
      
    
  
    FlowRouter.go("/detail/"+FlowRouter.getParam("_id"));
  
    },'click .btnDelete'(){
      STAGIAIRES.remove(this._id);
    },'click [name="Vider"]'(){
      event.target.matricule.value = '';
    event.target.nom.value = '';
    event.target.prenom.value = '';
    event.target.email.value = '';
    event.target.gsm.value = '';
    event.target.stage.value = '';
    },'click .btnDetails'(){
      /* $('input[name="matricule"]').val(this.matricule);
      $('input[name="nom"]').val(this.nom);
      $('input[name="prenom"]').val(this.prenom);
      $('input[name="email"]').val(this.email);
      $('input[name="gsm"]').val(this.gsm);
      $('input[name="stage"]').val(this._id); */
      
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
  