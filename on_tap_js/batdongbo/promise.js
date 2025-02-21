const p = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('anhcanh')
        }, 1000);
    })

p().then((value) => {
    console.log(value);
}).catch((err) => {
    console.warn(err);
}).finally(() => {
    console.log('done');
})
console.log('chay truoc');