'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var a = {};
  var b = new Array();
  for (var i = 0; i < collectionA.length;) {
    var count = 0;
    for (var j = i; j < collectionA.length; j++) {
      var c = collectionA[i].split("-");
      if (collectionA[i] == collectionA[j]) {
        if (c.length == 2) {
          a = {key: c[0], count: parseInt(c[1])};
        }
        else {
          a = {key: collectionA[i], count: count + 1};
        }
        count++;
      }
    }
    b.push(a);
    i += count;
  }
  var d = new Array();
  d = objectB.value;
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < d.length; j++)
      if (b[i].key == d[j]) {
        b[i].count = b[i].count - parseInt((b[i].count) / 3);
      }
  }
  //console.log(collectionA);
  return b;
}
