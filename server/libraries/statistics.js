function Statistics() {
  this.getMean = getMean;
  this.getCovariance = getCovariance;
  this.getBOne= getBOne;
  this.getBZero= getBZero;
  this.getCorrelation= getCorrelation;
  this.getRSquared = getRSquared;
  this.getYEstimate = getYEstimate;
  
  function getMean(numbers){
    let sum = 0;
    if (Array.isArray(numbers)) {
      for (let number of numbers) {
        if (typeof(number)=='string') {
          return null;
        }
        sum += number;
      }
    }else {
      return null;
    }
    return (sum/numbers.length);
  }

  function getCovariance(numbers){
    var covariance = 0;
    var x = [];
    var y = [];
    numbers.forEach(number=>{
      covariance+= number[0]*number[1];
      x.push(number[0]);
      y.push(number[1]);
    });
    covariance = covariance/numbers.length;
    covariance -= (getMean(x) * getMean(y));
    covariance = Math.round(covariance * 100)/100;
    return covariance;
  }

  function getBZero(numbers, decimals){
    var bZero = 0;
    var x = [];
    var y = [];
    numbers.forEach(number=>{
      x.push(number[0]);
      y.push(number[1]);
    });
    bZero = getMean(y) - getBOne(numbers)*getMean(x);
    if (decimals) {
      bZero = Math.round(bZero * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return bZero;
  }

  function getBOne(numbers, decimals){
    var bOne = 0;
    var x = [];
    var y = [];
    var xPow = 0;

    numbers.forEach(number=>{
      xPow+= Math.pow(number[0], 2);
      bOne+= number[0]*number[1];
      x.push(number[0]);
      y.push(number[1]);
    });
    bOne -= numbers.length * getMean(x) * getMean(y);
    bOne /= xPow - numbers.length * Math.pow(getMean(x),2);
    if (decimals) {
      bOne = Math.round(bOne * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return bOne;
  }

  function getCorrelation(numbers, decimals) {
    let sum_xy = 0;
    let sum_x = 0;
    let sum_y = 0;
    let sum_xx = 0;
    let sum_yy = 0;
    let n = numbers.length;
    let correlation = 0;
    numbers.forEach(number=>{
      let x = number[0];
      let y = number[1];
      sum_x += x;
      sum_y += y;
      sum_xy += x*y;
      sum_xx += x*x;
      sum_yy += y*y;
    })

    correlation = ( (n*sum_xy) - (sum_x*sum_y) );
    correlation = correlation / Math.sqrt( ((n*sum_xx) - sum_x*sum_x) * ( (n*sum_yy) - (sum_y*sum_y) ) );

    if (decimals) {
      correlation = Math.round(correlation * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return correlation;
  }

  function getRSquared(numbers, decimals) {
    let correlation = getCorrelation(numbers);
    let rSquared = correlation * correlation;
    if (decimals) {
      rSquared = Math.round(rSquared * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return rSquared;
  }

  function getYEstimate(numbers, xEstimate, decimals) {
    let B0 = getBZero(numbers);
    let B1 = getBOne(numbers);
    let yEstimate = B0 + B1*xEstimate;
    if (decimals) {
      yEstimate = Math.round(yEstimate * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return yEstimate;
  }

}
module.exports =(Statistics);
//var linkedList = new LinkedList();
