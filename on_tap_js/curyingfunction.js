function tich (a, b,c) {
    return a* b*c
}

console.log(tich(1,2,3));

//curying function là một hàm nhận nhiều tham số thì sẽ chuyển đổi thành một chuỗi các hàm và mỗi hàm sẽ nhận 1 tham số
//chuyển thành curying function

function addcurying(a) {
    return function(b) {
        return function(c) {
            return a*b*c
        }
    }
}

console.log(addcurying(2)(3)(4));