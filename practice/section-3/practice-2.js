'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = new Array();
  c = objectB.value;
  for (var i = 0; i < collectionA.length; i++) {
    for(var j=0;j<c.length;j++)
      if (collectionA[i].key == c[j]) {
        collectionA[i].count = collectionA[i].count - parseInt((collectionA[i].count)/3);
      }
  }
  //console.log(collectionA);
  return collectionA;
}
