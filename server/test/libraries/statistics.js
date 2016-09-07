process.env.NODE_ENV = 'test';

let chai = require('chai');
let Statistics = require('../../libraries/statistics');
var assert = chai.assert;

// chai.use(chaiHttp);

describe('MEAN', () => {
    beforeEach((done) => {
      done();
    });

    describe('getMean with no params', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean();
        assert.equal(mean, null);
      });
    });

    describe('getMean with a number', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean(5);
        assert.equal(mean, null);
      });
    });

    describe('getMean with a letter', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean('a');
        assert.equal(mean, null);
      });
    });

    describe('getMean with a bad array', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean([4,'a']);
        assert.equal(mean, null);
      });
    });

    describe('getMean with good data', function() {
      it('List should start empty', function() {
        let numbers = [2,3,4,4,5,6,6,7,7,8,10,10];
        let statistics = new Statistics();
        let mean = statistics.getMean(numbers);
        assert.equal(mean, 6);
      });
    });


});


// describe('Covariance', () => {
//     beforeEach((done) => {
//       done();
//     });
//
//     // describe('getCovariance with no params', function() {
//     //   it('List should start empty', function() {
//     //     let statistics = new Statistics();
//     //     let Covariance = statistics.getCovariance();
//     //     assert.equal(Covariance, null);
//     //   });
//     // });
//
//     describe('Get covariance with good data', function() {
//       it('List should start empty', function() {
//         let numbers = [[2,1],[3,3],[4,2],[4,4],[5,4],[6,4],[6,6],[7,4],[7,6],[8,7],[10,9],[10,10]];
//         let statistics = new Statistics();
//         let covariance = statistics.getCovariance(numbers);
//         assert.equal(covariance, 5.92);
//       });
//     });
//
//
// });



//CASOS DE PRUEBA PARA OBTENER BETTA UNO
// =================================================================
describe('BettaOne (B1)', () => {
    beforeEach((done) => {
        done();
    });

    describe('Get B1 with good data', function() {
        it('List should start empty', function() {
            let numbers = [[2,1],[3,3],[4,2],[4,4],[5,4],[6,4],[6,6],[7,4],[7,6],[8,7],[10,9],[10,10]];
            let statistics = new Statistics();
            let bOne = statistics.getBOne(numbers, 3);
            assert.equal(bOne, 0.986);
        });
    });

    describe('Test 1 - PSP PROGRAM', function() {
        it('Return B1 with the data of the PSP PROGRAM', function() {
            let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
            let statistics = new Statistics();
            let bOne = statistics.getBOne(numbers, 3);
            assert.equal(bOne, 1.728 );
        });
    });

    describe('Test 2 - PSP PROGRAM', function() {
        it('Return B1 with the data of the PSP PROGRAM', function() {
            let numbers = [[130, 15.0], [650, 69.9], [99, 6.5], [150, 22.4], [128, 28.4], [302, 65.9], [95, 19.4], [945, 198.7], [368, 38.8], [961, 138.2]];
            let statistics = new Statistics();
            let bOne = statistics.getBOne(numbers, 4);
            assert.equal(bOne, 0.1681 );
        });
    });

    describe('Test 3 - PSP PROGRAM', function() {
        it('Return B1 with the data of the PSP PROGRAM', function() {
            let numbers = [[163, 186], [765, 699], [141, 132], [166, 272], [137, 291], [355, 331], [136, 199], [1206, 1890], [433, 788], [1130, 1601]];
            let statistics = new Statistics();
            let bOne = statistics.getBOne(numbers, 5);
            assert.equal(bOne, 1.43097 );
        });
    });

    describe('Test 4 - PSP PROGRAM', function() {
        it('Return B1 with the data of the PSP PROGRAM', function() {
            let numbers = [[163, 15.0], [765, 69.9], [141, 6.5], [166, 22.4], [137, 28.4], [355, 65.9], [136, 19.4], [1206, 198.7], [433, 38.8], [1130, 138.2]];
            let statistics = new Statistics();
            let bOne = statistics.getBOne(numbers, 6);
            assert.equal(bOne, 0.140164 );
        });
    });

});


//CASOS DE PRUEBA PARA OBTENER BETTA ZERO
// =================================================================
describe('BettaZero (B0)', () => {
    beforeEach((done) => {
        done();
    });

    describe('Get B0 with good data', function() {
        it('List should start empty', function() {
            let numbers = [[2,1],[3,3],[4,2],[4,4],[5,4],[6,4],[6,6],[7,4],[7,6],[8,7],[10,9],[10,10]];
            let statistics = new Statistics();
            let bettaZero = statistics.getBZero(numbers, 3);
            assert.equal(bettaZero, -0.917);
        });
    });

    describe('Test 1 - PSP PROGRAM', function() {
        it('Return B0 with the data of the PSP PROGRAM', function() {
            let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
            let statistics = new Statistics();
            let bettaZero = statistics.getBZero(numbers, 2);
            assert.equal(bettaZero, -22.55 );
        });
    });

    describe('Test 2 - PSP PROGRAM', function() {
        it('Return B0 with the data of the PSP PROGRAM', function() {
            let numbers = [[130, 15.0], [650, 69.9], [99, 6.5], [150, 22.4], [128, 28.4], [302, 65.9], [95, 19.4], [945, 198.7], [368, 38.8], [961, 138.2]];
            let statistics = new Statistics();
            let bettaZero = statistics.getBZero(numbers, 3);
            assert.equal(bettaZero, -4.039 );
        });
    });

    describe('Test 3 - PSP PROGRAM', function() {
        it('Return B0 with the data of the PSP PROGRAM', function() {
            let numbers = [[163, 186], [765, 699], [141, 132], [166, 272], [137, 291], [355, 331], [136, 199], [1206, 1890], [433, 788], [1130, 1601]];
            let statistics = new Statistics();
            let bettaZero = statistics.getBZero(numbers, 2);
            assert.equal(bettaZero, -23.92 );
        });
    });

    describe('Test 4 - PSP PROGRAM', function() {
        it('Return B0 with the data of the PSP PROGRAM', function() {
            let numbers = [[163, 15.0], [765, 69.9], [141, 6.5], [166, 22.4], [137, 28.4], [355, 65.9], [136, 19.4], [1206, 198.7], [433, 38.8], [1130, 138.2]];
            let statistics = new Statistics();
            let bettaZero = statistics.getBZero(numbers, 3);
            assert.equal(bettaZero, -4.604  );
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


//CASOS DE PRUEBA PARA OBTENER EL Y ESTIMADO
// =================================================================
describe('Y ESTIMATE (Yk)', () => {
    beforeEach((done) => {
        done();
    });

    describe('Test 1 - PSP PROGRAM', function() {
        it('Return the Y Estimate from the data of the PSP PROGRAM', function() {
            let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
            let statistics = new Statistics();
            let yEstimate = statistics.getYEstimate(numbers, 386, 3);
            assert.equal(yEstimate, 644.429 );
        });
    });

    describe('Test 2 - PSP PROGRAM', function() {
        it('Return the Y Estimate from the data of the PSP PROGRAM', function() {
            let numbers = [[130, 15.0], [650, 69.9], [99, 6.5], [150, 22.4], [128, 28.4], [302, 65.9], [95, 19.4], [945, 198.7], [368, 38.8], [961, 138.2]];
            let statistics = new Statistics();
            let yEstimate = statistics.getYEstimate(numbers, 386, 3);
            assert.equal(yEstimate, 60.858  );
        });
    });

    describe('Test 3 - PSP PROGRAM', function() {
        it('Return the Y Estimate from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 186], [765, 699], [141, 132], [166, 272], [137, 291], [355, 331], [136, 199], [1206, 1890], [433, 788], [1130, 1601]];
            let statistics = new Statistics();
            let yEstimate = statistics.getYEstimate(numbers, 386, 4);
            assert.equal(yEstimate, 528.4294 );
        });
    });

    describe('Test 4 - PSP PROGRAM', function() {
        it('Return the Y Estimate from the data of the PSP PROGRAM', function() {
            let numbers = [[163, 15.0], [765, 69.9], [141, 6.5], [166, 22.4], [137, 28.4], [355, 65.9], [136, 19.4], [1206, 198.7], [433, 38.8], [1130, 138.2]];
            let statistics = new Statistics();
            let yEstimate = statistics.getYEstimate(numbers, 386, 4);
            assert.equal(yEstimate, 49.4994 );
        });
    });

});
