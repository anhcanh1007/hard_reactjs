//JS bản chất có hai kiểu dữ liệu chính là tham trị và tham chiếu
//JS có các kiểu tham trị sau:
//** 
// number
// string
// boolean
// null
// underfined
// bigint
// symbol
// */

// tham trị là gì: tham trị là khi khai báo một biến và gán nó cho biến khác, thì khi thay đổi giá trị của 1 trong 2 biến đều không ảnh hưởng đến biến còn lại. Hay noí cách khác mỗi biến được lưu bởi mỗi vùng nhớ khác nhau, chúng là độc lập với nhau

let name = 'anh canh'
let name1 = name
name1 = 'anh'
name = 'anh cành'

console.log(name, name1);