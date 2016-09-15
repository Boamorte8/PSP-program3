function Statistics() {
  this.getRanges = getRanges;
  this.determinarPartes = determinarPartes;
  this.getLog = getLog;
  this.getMean = getMean;
  this.getLogMean = getLogMean;
  this.getLogVariance = getLogVariance;
  this.getLogStd = getLogStd;
  this.getCovariance = getCovariance;

  function getRanges(list){
    var respuesta = {}
    if (list) {
      if (list[0][2]) {
        respuesta.error = 'La lista tiene mas de 2 columnas';
        respuesta.datos = list;
      }
      else if (list[0][1]) {
        var datos = determinarPartes(list);
        respuesta.mensaje = 'La lista tiene 2 columnas';
        respuesta.datos = datos;
      }
      else if (list[0][0]) {
        respuesta.mensaje = 'La lista tiene 1 columna';
        respuesta.datos = list;
      }
      else {
        respuesta.error = 'La lista no tiene datos';
      }
    }
    else {
      respuesta.error = 'Problemas con la lista';
    }
    return respuesta;
    // let std = getLogStd(numbers);
    // let avg = getLogMean(numbers);
    // let ranges = [];
    // if (std != null && avg != null) {
    //   for(var i=-2; i<=2; i++)
    //   {
    //     ranges.push(Math.pow(Math.E,(avg+(i*std))));
    //   }
    // }else {
    //   return null;
    // }
  }

  function determinarPartes(lista) {
    var respuesta = [];
    for (var dupla in lista) {
      if (object.hasOwnProperty(dupla)) {

      }
    }
    for (var i = 0; i < lista.length; i++) {
      respuesta[i] = lista[i][0]/lista[i][1];
    }
    return respuesta;
  }

  function getLog(datos) {
    var respuesta = [];
    for (var i = 0; i < datos.length; i++) {
      respuesta[i] = lista[i][0]/lista[i][1];
    }
    return respuesta;
  }

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

  function getLogMean(numbers){
    let sum = 0;
    if (Array.isArray(numbers)) {
      for (let number of numbers) {
        if (typeof(number)=='string') {
          return null;
        }
        sum += Math.log(number);
      }
    }else {
      return null;
    }
    return (sum/numbers.length);
  }

  function getLogVariance(numbers){
    let variance = 0;
    let avg = getLogMean(numbers);
    if (Array.isArray(numbers) && avg!=null) {
      for (let number of numbers) {
        if (typeof(number)=='string') {
          return null;
        }
        variance += Math.pow((Math.log(number) - avg),2);
      }
    }else {
      return null;
    }
    return sum/(numbers.length-1);
  }

  function getLogStd(numbers){
    let variance = getLogVariance(numbers);
    if (variance != null) {
      return Math.sqrt(variance);
    }else {
      return null;
    }
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

}
module.exports =(Statistics);
