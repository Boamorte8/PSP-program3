'use strict';
(function(){

class HomeComponent {
  constructor(Stats) {
    this.message = 'Hello';
    this.Stats = Stats;
  }

  getStatistics(file, xEstimate){
  	console.log("getStatistics");
  	this.getRegression(file);
  	this.getCorrelation(file);
  	this.getEstimated(file, 386);

  }

  getRegression(file){
  	console.log('Regression')
  	this.Stats.getRegression(file)
  	.then(regression=>{
  		this.regression = regression;
  	})
  }

  getCorrelation(file){
  	this.Stats.getCorrelation(file)
  	.then(correlation=>{
  		this.correlation = correlation;
  	})
  }

  getEstimated(file, xEstimate){
  	this.Stats.getEstimated(file, xEstimate)
  	.then(yEstimate=>{
  		this.yEstimate = yEstimate;
  	})
  }

}

angular.module('pspApp')
  .component('psp3', {
    templateUrl: 'app/PSP3/psp3.html',
    controller: HomeComponent,
    controllerAs:'vm'
  });

})();


'use strict';
