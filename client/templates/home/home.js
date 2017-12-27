import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { STAGIAIRES } from '../../../lib/Stagiaire.js';


Template.home.onCreated(function helloOnCreated() {
    // counter starts at 0
    
  });
  
  Template.home.helpers({
    stagiaires(){
      return STAGIAIRES.find({});
    },
  });
  
  Template.home.events({
    'submit .ajouterEtudiant'(event, instance) {
      event.preventDefault();
  
      STAGIAIRES.insert({
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
  
    },'click .btnDelete'(){
      STAGIAIRES.remove(this._id);
    },'click .btnDetails'(){
      $('input[name="matricule"]').val(this.matricule);
      $('input[name="nom"]').val(this.nom);
      $('input[name="prenom"]').val(this.prenom);
      $('input[name="email"]').val(this.email);
      $('input[name="gsm"]').val(this.gsm);
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
  