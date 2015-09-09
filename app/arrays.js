exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var result;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        result = i;
      }
    }
    return result || -1;
  },

  sum : function(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }

    return result;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
	    if (arr[i] === item) {
		    arr.splice(i, 1);
		    console.log(arr);
	    }
    }
	  return arr;
  },

  removeWithoutCopy : function(arr, item) {
	  for(var i = 0; i < arr.length; i++) {
		  if (arr[i] === item) {
			  arr.splice(i, 2);
			  console.log('arr', arr);
		  }
	  }
	  return arr;
  },

  append : function(arr, item) {
		arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
	  arr = arr.splice(0, arr.length - 1);
	  return arr;
  },

  prepend : function(arr, item) {
		arr.unshift(item);
	  return arr;
  },

  curtail : function(arr) {
		arr.shift();
	  return arr;
  },

  concat : function(arr1, arr2) {
		var newArr = arr1.concat(arr2);
	  return newArr;
  },

  insert : function(arr, item, index) {
		arr.splice(index, 0, item);
	  return arr;
  },

  count : function(arr, item) {
		var counter = 0,
			i;
	  for(i = 0; i < arr.length; i++) {
		  if (arr[i] === item) {
			  counter++;
		  }
	  }
	  return counter;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
