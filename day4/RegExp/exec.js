var pattern =/java/g;
var str="javascript is a beautiful lang";

var result;
result=pattern.exec(str);
console.log(result);

/*
[
  'java',
  index: 0,
  input: 'javascript is a beautiful lang',
  groups: undefined
]
returns : Array having index of matched word
input: that str we passes
groups:
*/

//test()==> true or false==> java <== matches the 
/*
var outcome;
outcome=pattern.test(str);
console.log(outcome);


*/