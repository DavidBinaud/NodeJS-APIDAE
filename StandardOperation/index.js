const tab1 = [1, 6, 3, 4]
const tab2 = [6, 3, 7, 8, 9]

let diff = tab1.filter(e => !tab2.includes(e)).concat(tab2.filter(e => !tab1.includes(e)))
console.log(diff)