const obj = { a: { b: 1 }, c: 2, d: {e: {f: 5}} , g:9}

let f = function(object, properties){
	let tab = {}
	properties.forEach(prop =>{
			let depth = prop.split('.')
			let cur
			if(depth.length>1){
				cur = f(object[depth[0]], [depth.slice(1).join('.')])
			} else {
				cur = object[prop]	
			}
			tab[depth[0]] = cur	
	})
	return  tab
}

console.log(f(obj, ['a.b', 'c', 'd.e.f']))