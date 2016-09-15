process.env.NODE_ENV = 'test';

let chai = require('chai');
let Statistics = require('../../libraries/statistics');
var assert = chai.assert;

// chai.use(chaiHttp);

describe('GetRanges', () => {
    beforeEach((done) => {
      done();
    });

    describe('getRanges without list', function() {
      it('Response should show error message Problemas con la lista', function() {
        let statistics = new Statistics();
        let response = statistics.getRanges();
        let mensaje = response.error;
        assert.equal(mensaje, 'Problemas con la lista');
      });
    });

    describe('getRanges with list vacia', function() {
      it('Response should show error message La lista no tiene datos', function() {
        let datos = [[]];
        let statistics = new Statistics();
        let response = statistics.getRanges(datos);
        let mensaje = response.error;
        assert.equal(mensaje, 'La lista no tiene datos');
      });
    });

    describe('getRanges with list with more than 2 columns', function() {
      it('Response should show error message La lista tiene mas de 2 columnas', function() {
        let datos = [[18, 3, 4] , [18, 3, 8], [25, 3, 6]];
        let statistics = new Statistics();
        let response = statistics.getRanges(datos);
        let mensaje = response.error;
        assert.equal(mensaje, 'La lista tiene mas de 2 columnas');
      });
    });

});

describe('GetLogAverage', () => {
    beforeEach((done) => {
        done();
    });

    describe('getLogAvg for empty array', function () {
        it('Empty list should return "empty list"', function () {
            let statistics = new Statistics();
            let list = new Array();
            assert.throws(function() { statistics.getLogAverage(list) }, Error, 'empty list');
        });
    });

    describe('getLogAvg for not numbers array', function () {
        it('Empty list should return "empty list"', function () {
            let statistics = new Statistics();
            let list = new Array('a','b','c');
            assert.throws(function() { statistics.getLogAverage(list) }, Error, 'not numbers list');
        });
    });

});

// describe('determinarPartes', () => {
//     beforeEach((done) => {
//       done();
//     });
//
//     describe('determinarPartes with normal list', function() {
//       it('Response should a new array with the result [6, 6, 8.333333333333334, 10.333333333333334, 12.333333333333334, 16.4, 20.5, 21.75, 22.25, 23, 28.333333333333332, 29, 55.8]', function() {
//         let respuesta = [6, 6, 8.333333333333334, 10.333333333333334, 12.333333333333334, 16.4, 20.5, 21.75, 22.25, 23, 28.333333333333332];
//         let datos = [ [18, 3] , [18, 3], [25, 3], [31, 3], [37, 3], [82, 5], [82, 4], [87, 4], [89, 4], [230, 10], [85, 3]];
//         let statistics = new Statistics();
//         let response = statistics.determinarPartes(datos);
//         assert.equal(response, respuesta);
//       });
//     });
//
//
// });
//
// describe('getLog', () => {
//     beforeEach((done) => {
//       done();
//     });
//
//     describe('determinarPartes with normal list', function() {
//       it('Response should a new array with the result [6, 6, 8.333333333333334, 10.333333333333334, 12.333333333333334, 16.4, 20.5, 21.75, 22.25, 23, 28.333333333333332, 29, 55.8]', function() {
//         let respuesta = [6, 6, 8.333333333333334, 10.333333333333334, 12.333333333333334, 16.4, 20.5, 21.75, 22.25, 23, 28.333333333333332];
//         let datos = [ [18, 3] , [18, 3], [25, 3], [31, 3], [37, 3], [82, 5], [82, 4], [87, 4], [89, 4], [230, 10], [85, 3]];
//         let statistics = new Statistics();
//         let response = statistics.determinarPartes(datos);
//         assert.equal(response, respuesta);
//       });
//     });
//
//
// });
