//defining generator function
function* gen() {
        let ask1 = yield "2 + 2 = ?";

        console.log(ask1);

        let ask2 = yield "3 * 3 = ?"

        console.log(ask2);
    }
    //creating a object called generator
let generator = gen();

console.log(generator.next().value);

console.log(generator.next(4).value);
console.log(generator.next(9).value);