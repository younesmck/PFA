
import { STAGIAIRES } from '../lib/Stagiaire.js';

Meteor.methods({
    parseUpload( data ) {
      check( data, Array );
  
      for ( let i = 0; i < data.length; i++ ) {
        let item   = data[ i ];
  
          STAGIAIRES.insert( item );
          alert("hoplaaa");
        }
      
    }
  });