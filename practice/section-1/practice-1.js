'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var same=0;
  for(var i =0;i<collectionA.length;i++) {
    var temp1 = collectionA[i];
    for (var j = 0; j < collectionB.length; j++) {
      var temp2=collectionB[j];
      if (temp1==temp2) {
        result[same] = temp2;
        same = same + 1;
      }
    }
  }
  return result;
}
