import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { ENCADRANTS } from "../../../lib/Encadrants.js";
import { FILIERE } from "../../../lib/enum.js";

Template.encadrant.onCreated(function helloOnCreated() {});

Template.encadrant.helpers({
  filieres(){
    return FILIERE.filieres;
  }
});

Template.encadrant.events({
  "submit .ajouterEncadrant"(event, instance) {
    event.preventDefault();
    ENCADRANTS.insert({
      nom:event.target.nom.value,
      prenom:event.target.prenom.value,
      email:event.target.email.value,
      gsm:event.target.gsm.value,
      filiere:event.target.filiere.value,
      grade:event.target.grade.grade
    });
  }
});
