const handle = (a, b, ...c) => {
    return c
}

const value = handle(1,2,3,4,5,6)

console.log(value);

//rest_parameter gọi là các tham số còn lại


//rest_parameter kết hợp với destructuring
const handle2 = ({a, b, ...c}) => {
    return c
}

const value2 = handle2({a: 1, b: 2, c: 3, d:4})

console.log(value2);