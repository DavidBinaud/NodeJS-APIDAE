const tab = [[4, 54, 97, 46, 3], [2, 5, 78, 64], [46, 28, 29, 72, 3, 5]]

let maxTab = tab.map(t => t.reduce((max, cur) => cur > max ? cur : max))

console.log(tab)
console.log(maxTab)