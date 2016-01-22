module.exports = function(numberOne, numberTwo){

    var x = [];

    if(numberTwo){

      for(var i = numberOne; i < numberTwo; i++){
        x.push(i);
      }


    } else {
       for(var i = 0; i < numberOne; i++){
         x.push(i);
     }


    }

    return x;

    //expect(range(4,9)).to.eql([4,5,6,7,8]);




};
