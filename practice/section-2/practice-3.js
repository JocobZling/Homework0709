'use strict';

function countSameElements(collection) {
  var a = {};
  var b = new Array();
  for (var i = 0; i < collection.length; i++) {
    var c = collection[i].split("-");
    var d = collection[i].split(":");
    var f = collection[i].split("[");
    if (c.length == 2) {
      collection.splice(i, 1);
      for (var m = 0; m < parseInt(c[1]); m++) {
        collection.splice(i, 0, c[0]);
      }
    }
    else if (d.length == 2) {
      collection.splice(i, 1)
      for (var n = 0; n < d[1]; n++) {
        collection.splice(i, 0, d[0]);
        //collection.push(d[0]);
      }
    }
    else if (f.length == 2) {
      var e = f[1].split("]");
      collection.splice(i, 1);
      for (var q = 0; q < e[0]; q++) {
        collection.splice(i, 0, f[0]);
        //collection.push(f[0]);
      }
    }
  }

  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] == collection[j]) {
        count++;
      }
    }
    a = {name: collection[i], summary: count};
    b.push(a);
    i += count;
  }
  return b;
}
