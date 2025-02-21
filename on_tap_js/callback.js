const nums = [1,2,3,4,5]
const callback = (item, index) => {
    console.log(`STT: ${index} la: ${item}`);
}
nums.forEach(callback)
//callback function là cách truyền tham số cho một hàm và tham số đó chính là một hàm khác

