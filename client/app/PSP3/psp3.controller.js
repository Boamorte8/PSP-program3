'use strict';
(function(){

class PSP3Component {
  constructor(Stats) {
    this.message = 'Hello';
    this.Stats = Stats;
  }

  getStatistics(file){
  	console.log("getStatistics");
  	this.getEstimated(file);

  }

  getEstimated(file){
  	this.Stats.getEstimated(file)
  	.then(response=>{
      if (response.error) {
        console.log(response.error);
        this.mensajeError = response;
      }
  		else {
  		  this.respuesta = response.mensaje;
        console.log(response);
  		}
  	})
  }

}

angular.module('pspApp')
  .component('psp3', {
    templateUrl: 'app/PSP3/psp3.html',
    controller: PSP3Component,
    controllerAs:'vm'
  });

})();
