const tab = [1, 2, 3, 1, 2, 3]

// TODO function remove

let remove = function(tab, ...Args){
	Args.forEach(value => tab = tab.filter(e => e != value))
	return tab
}

const result = remove(tab, 2, 3)
console.log(result)