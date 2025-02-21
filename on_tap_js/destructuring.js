// destructuring voi object
const user = {
    name: 'anh',
    age: 24,
    sex: 'male'
}

// const name = user.name
// const age = user.age
// const sex = user.sex

const {name: userName, age} = user; 

console.log(userName, age);

// destructuring voi array
const mon_hoc = [
    'toan',
    'van',
    'anh',
    function (a, b) {
        return a*b
    }
]

// const toan = mon_hoc[0]
// const van = mon_hoc[1]
// const anh = mon_hoc[2]

const [value1, value2, value3, tich] = mon_hoc
const [...value] = mon_hoc
console.log(value1, tich(2,3));
console.log(value);