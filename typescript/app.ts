/**
 * Basic Type
 */

//string
let name12 = 'anh canh';

//number
let age = 12;

//boolean
let isLoading = false;

//undefined
let text = undefined;

//null
let tex1 = null;

//any
let test : any;
test = 'anh canh';
test = 2;

//object
let user : {
    name: string,
    age?: number
} = {
    name : '',
};
user.name  = 'anh canh';

//array
let cars: any[] = [];
cars.push(1);
cars.push('anh canh');

//string array
let laptops = ['vivo', 'dell'];
let pcs: string [] = [];
pcs.push('dell');

//number array
let ages = [1,2,3,4];
let ageses: number [] = [];
ageses.push(1);
ageses.push(2);

//object array
let coures: {
    name: string,
    price?: number
} [] = [];
coures.push({
    name: 'toan hoc',
    // price : 2000
});

//function
const sum = (a: number, b: number) => a + b ;
console.log(sum(1,2));
const handle = () => {
    console.log('anh canh');
}

//union
let price: string | number | boolean
price = 200
price = 'anh canh'
price = true
let body : {name: string | number} | {firstName : string | boolean} = {
    name : 200
} 
let body1 : {name: string | number} & {firstName : string | boolean} = {
    name : 200,
    firstName : 'anhcanh'
} 

//enum
enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}
let s = Size.S

//interface
interface State {
    name: string
    isLoading: boolean
}
interface State {
    age : number
}
let state: State = {
    name: 'anh canh',
    isLoading: true,
    age : 24
}

//type
type State1 =  {
    name: string,
    isLoading: boolean
}
type Name = {
    name: string
}
type Age = {
    age: number
}
type person = Name | Age

//class
class user1 {

    constructor(public name: string, private age: number, readonly money: number){
        this.name = name
        this.age = age
        this.money = money
    }
    handle () {
        let value = this.money
    }
}
const anh = new user1('anh canh', 24, 434)