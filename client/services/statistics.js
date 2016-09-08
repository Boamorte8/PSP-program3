'use strict';
(function(){

class ThingFactory {
    constructor($http, $q, Upload) {
        this.$q = $q;
        this.Upload = Upload;
    }
	    // Service to list statistic
	getRegression(file) {
		let defered = this.$q.defer();
		let promise = defered.promise;
	        this.Upload.upload({ url: 'statistics/regression', data: {data: file}})
	        .success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
		return promise;
	};

	getCorrelation(file) {
	let defered = this.$q.defer();
	let promise = defered.promise;
        this.Upload.upload({ url: 'statistics/correlation', data: {data: file}})
        .success(function(data) {
				defered.resolve(data);
		})
		.error(function(err) {
				defered.reject(err);
		});
	return promise;
	};


	getEstimated(file, xEstimate) {
	let defered = this.$q.defer();
	let promise = defered.promise;
        this.Upload.upload({ url: 'statistics/estimate', data: {data: file, xEstimate:xEstimate}})
        .success(function(data) {
				defered.resolve(data);
		})
		.error(function(err) {
				defered.reject(err);
		});
	return promise;
	};

}

angular.module('pspApp')
  .factory('Stats', ThingFactory);


})();
