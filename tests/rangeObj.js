module.exports =  function(num){
    var myObj = {};

    if(num){
    var rangeMod = require('./range.js');

    var arrayOfNum = rangeMod(num);

    arrayOfNum.map(function(a,b){
        myObj[a] = a;

    });

    } else {

    }

    return myObj;
}
