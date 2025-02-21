//toán tử logic dựa trên truthy và falsy, hay còn gọi là đúng và sai
//ngoài những giá trị sau thì tất cả đều đúng: false, NaN, underfined, '', null, 0, 0n

//toán tử &&: chỉ cần gặp falsy hoặc đi đến cuối cùng thì nó sẽ return về giá trị dừng

// const a = 'hi'
// const b = 0
// const c = ''

// const d = a && b && c
// console.log(d); //0

//toán tử ||: chỉ cần gặp truthy hoặc đi đến cuối cùng thì nó sẽ return về giá trị dừng

const a = 'hi'
const b = 0
const c = ''

const d = a || b || c
console.log(d); //hi

//toán tử phủ định: !

//toán tử 3 ngôi

let fname = 'anh'

fname === 'anh' ? console.log(true) : console.log(false);

//toán tử optinal chaining: ?.
//khi ta cố truy cập thuộc tính underfined hoặc null nó sẽ báo lỗi
let user = {}
// console.log(user.name.street); //error
// => ta cần đặt điều kiện(optinal chaining để xử lý vấn đề này)
console.log(user?.address?.street);

//toán tử nulllist(??): dùng trong trường hợp check gía trị có phải underfined hay null hay không
//nulllist khác với || là || nó check theo các falsy : 0, 0n, NaN ....
let admin
console.log(admin ?? 'anynomouns');

//templastring
const handle = (a, b) => a + b
let b1 = `kết qủa là:  ${handle(2,4)}`
console.log(b1); 
