'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var same = 0;
  var C=collectionB.join(",");
  //console.log(C);
  var collectionC=C.split(",");
  for (var i = 0; i < collectionA.length; i++) {
    var temp1 = collectionA[i];
    for (var j = 0; j < collectionC.length; j++) {
           var temp2 = collectionC[j];
      if (temp1 == temp2) {
        result[same] = temp1;
        same = same + 1;
      }
    }
  }
  return result;
}
