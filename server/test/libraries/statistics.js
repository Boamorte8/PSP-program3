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

describe('determinarPartes', () => {
    beforeEach((done) => {
      done();
    });

    describe('determinarPartes with normal list', function() {
      it('Response should a new array with the result [[6], [6], [8.333333333333334], [10.333333333333334], [12.333333333333334], [16.4], [20.5], [21.75], [22.25], [23], [28.333333333333332], [29], [55.8]]', function() {
        let respuesta = [[6], [6], [8.333333333333334], [10.333333333333334], [12.333333333333334], [16.4], [20.5], [21.75], [22.25], [23], [28.333333333333332], [29], [55.8]];
        let datos = [ [18, 3] , [18, 3], [25, 3], [31, 3], [37, 3], [82, 5], [82, 4], [87, 4], [89, 4], [230, 10], [85, 3], [87, 3], [558, 10]];
        let statistics = new Statistics();
        let response = statistics.determinarPartes();
        assert.equal(response, respuesta);
      });
    });


});


//CASOS DE PRUEBA PARA OBTENER LA CORRELACIÓN
// =================================================================
describe('CORRELATION', () => {
    beforeEach((done) => {
        done();
    });

    describe('Test 1 - PSP PROGRAM', function() {
        it('Return the correlation from the data of the PSP PROGRAM', function() {
            let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
            let statistics = new Statistics();
            let correlation = statistics.getCorrelation(numbers, 4);
            assert.equal(correlation, 0.9545 );
        });
    });

    describe('Test 2 - PSP PROGRAM', function() {
        it('Return the correlation from the data of the PSP PROGRAM', function() {
            let numbers = [[130, 15.0], [650, 69.9], [99, 6.5], [150, 22.4], [128, 28.4], [302, 65.9], [95, 19.4], [945, 198.7], [368, 38.8], [961, 138.2]];
            let statistics = new Statistics();
            let correlation = statistics.getCorrelation(numbers, 4);
            assert.equal(correlation, 0.9333  );
        });
    });

    describe('Test 3 - PSP PROGRAM', function() {
        it('Return the correlation from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 186], [765, 699], [141, 132], [166, 272], [137, 291], [355, 331], [136, 199], [1206, 1890], [433, 788], [1130, 1601]];
            let statistics = new Statistics();
            let correlation = statistics.getCorrelation(numbers, 4);
            assert.equal(correlation, 0.9631 );
        });
    });

    describe('Test 4 - PSP PROGRAM', function() {
        it('Return the correlation from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 15.0], [765, 69.9], [141, 6.5], [166, 22.4], [137, 28.4], [355, 65.9], [136, 19.4], [1206, 198.7], [433, 38.8], [1130, 138.2]];
            let statistics = new Statistics();
            let correlation = statistics.getCorrelation(numbers, 4);
            assert.equal(correlation, 0.9480 );
        });
    });

});

//CASOS DE PRUEBA PARA OBTENER EL R CUADRADO
// =================================================================
describe('R SQUARED', () => {
    beforeEach((done) => {
        done();
    });

    describe('Test 1 - PSP PROGRAM', function() {
        it('Return the rSquared from the data of the PSP PROGRAM', function() {
            let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
            let statistics = new Statistics();
            let rSquared = statistics.getRSquared(numbers, 4);
            assert.equal(rSquared, 0.9111 );
        });
    });

    describe('Test 2 - PSP PROGRAM', function() {
        it('Return the rSquared from the data of the PSP PROGRAM', function() {
            let numbers = [[130, 15.0], [650, 69.9], [99, 6.5], [150, 22.4], [128, 28.4], [302, 65.9], [95, 19.4], [945, 198.7], [368, 38.8], [961, 138.2]];
            let statistics = new Statistics();
            let rSquared = statistics.getRSquared(numbers, 4);
            assert.equal(rSquared, .8711  );
        });
    });

    describe('Test 3 - PSP PROGRAM', function() {
        it('Return the rSquared from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 186], [765, 699], [141, 132], [166, 272], [137, 291], [355, 331], [136, 199], [1206, 1890], [433, 788], [1130, 1601]];
            let statistics = new Statistics();
            let rSquared = statistics.getRSquared(numbers, 4);
            assert.equal(rSquared, .9276 );
        });
    });

    describe('Test 4 - PSP PROGRAM', function() {
        it('Return the rSquared from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 15.0], [765, 69.9], [141, 6.5], [166, 22.4], [137, 28.4], [355, 65.9], [136, 19.4], [1206, 198.7], [433, 38.8], [1130, 138.2]];
            let statistics = new Statistics();
            let rSquared = statistics.getRSquared(numbers, 4);
            assert.equal(rSquared, .8988 );
        });
    });

});
