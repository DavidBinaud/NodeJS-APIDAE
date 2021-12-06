const students = [
  { name: 'John', money: 10 },
  { name: 'Todd', money: 25 },
  { name: 'Jack', money: 33 },
  { name: 'Walter', money: 18 }
]

console.log(students.reduce((acc,e)=>acc + parseInt(e.money),0))