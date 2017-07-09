'use strict';

function countSameElements(collection) {
  var a = {};
  var b = new Array();
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      var c = collection[i].split("-");
      if (collection[i] == collection[j]) {
        if (c.length == 2) {
          a = {key: c[0], count: parseInt(c[1])};
        }
        else {
          a = {key: collection[i], count: count + 1};
        }
        count++;
      }
    }
    b.push(a);
    i += count;
  }
  return b;
}

