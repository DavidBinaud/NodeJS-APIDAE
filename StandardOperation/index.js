const obj = {
  a: true,
  b: true,
  c: false
}

numberOfTrue  = 0
for(property in obj){
	if(obj[property] == true){
		numberOfTrue++
	}
}

console.log(obj, numberOfTrue)