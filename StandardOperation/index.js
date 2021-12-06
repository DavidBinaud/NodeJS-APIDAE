const tab = [1, [2, [3, [4]], 5]]

let f = function(tab, depth){
	return tab.flat(depth)
}

console.log(f(tab, 2))