const obj = {
  a: 1,
  b: 2,
  c: 3
}

if(obj.hasOwnProperty('c')){
	obj.d = 4
}

console.log(obj)