const tab = [1, 2, 3, 4, 5]

let f = function(tab, numberToRemove){
	return tab.slice(numberToRemove)
}

console.log(f(tab, 2))