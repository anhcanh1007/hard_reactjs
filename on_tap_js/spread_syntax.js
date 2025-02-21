const user = {
    name: 'anh',
    age: 24,
    asibity: ['code']
}

//shalow copy
// được gọi là coppy nông, là khi copy một object mới từ object cũ
const cloneUser = {...user}

console.log(cloneUser);