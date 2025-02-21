// trong js có các kiểu dữ liệu tham chiếu sau
//**
// object
// array
// function 
// */

//về bản chất thì array và function cũng là object
//object thì không giống như các kiểu dữ liệu của tham trị. Một biến object không lữu trữ giá trị mà nó chỉ lưu trữ vùng nhớ hay còn gọi là nó tham chiếu đến vùng nhớ
//tức là khi chúng ta khởi tạo một biến object và gán nó cho một biến object khác thì chúng đều tham chiếu đến cùng một vùng nhớ, khi đó chúng ta có thể thay đổi giá trị 1 trong 2 object thì object còn lại cũng thay đổi giá trị
//nhưng đôi khi chúng ta cũng cần thay đổi 1 trong 2 object để object còn lại không bị thay đổi thì chúng ta dùng kĩ thuật clone object , sử dụng spread syntax.

let user = {name: 'anh'}
let admin = user

admin.name = 'anh canh'
user.name = 'anh canh dang test'

console.log(admin.name); //anhcanh
