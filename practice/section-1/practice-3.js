'use strict';
//关联数组
function collectSameElements(collectionA, objectB) {
  var result = new Array();
  var same = 0;
  var c=new Array();
  c=objectB.value;
  for (var i = 0; i < collectionA.length; i++) {
    var temp1 = collectionA[i];
    for (var j = 0; j < c.length; j++) {
      var temp2 = c[j];
      if (temp1 == temp2) {
        result[same] = temp1;
        same = same + 1;
      }
    }
  }
  return result;
}
