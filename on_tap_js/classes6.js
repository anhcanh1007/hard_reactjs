// class Cat {
//     constructor(name, color, type) {
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     keu() {
//         console.log(`${this.name} kêu: meo mèo mòe`);
//     }
// }

// let alex = new Cat('mèo', 'đỏ')

// alex.keu()

//vấn đề this trong class

//cách  : sử dụng arrow function cho hàm trong class
// function handle(cb) {
//     cb()
// }

// class Cat {
//     constructor(name, color, type) {
//         this.name = name
//         this.color = color
//         this.type = type
//     }

//     keu = () => {
//         console.log(`${this.name} kêu: meo mèo mòe`);
//     }

//     run() {
//         handle(this.keu)
//     }
// }
// let alex = new Cat('mèo')

// alex.run()

//cách 2 : sử dụng arrow function lúc truyền vào

function handle(cb) {
    cb()
}

class Cat {
    constructor(name, color, type) {
        this.name = name
        this.color = color
        this.type = type
    }

    keu(){
        console.log(`${this.name} kêu: meo mèo mòe`);
    }

    run() {
        handle(() => {this.keu()})
    }
}
let alex = new Cat('mèo')

alex.run()
