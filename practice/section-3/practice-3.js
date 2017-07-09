'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var a = {};
  var b = new Array();
  for (var i = 0; i < collectionA.length;) {
    var count = 0;
    for (var j = i; j < collectionA.length; j++) {
      if (collectionA[i] == collectionA[j]) {
        count++;
      }
    }
    a = {key: collectionA[i], count: count};
    b.push(a);
    i += count;
  }
  var c = new Array();
  c = objectB.value;
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < c.length; j++)
      if (b[i].key == c[j]) {
        b[i].count = b[i].count - parseInt((b[i].count) / 3);
      }
  }
  //console.log(b);
  return b;
}
