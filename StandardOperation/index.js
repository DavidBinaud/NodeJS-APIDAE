const tab = [1, 2, 3, 4, 5]

let f  =  function(tab,  chunkSize){
	let res = []
	for (var i = 0; i < tab.length; i++) {
		if(i % chunkSize === 0){
			res.push([])
		}
		res[res.length-1].push(tab[i])
	}
	return res
}

console.log(f(tab, 2))