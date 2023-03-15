const prompt = require ("prompt-sync")({sigint: true})

var inputN = prompt("Calculate: ");
let noSpace = inputN.replaceAll(' ', '');
let inputArr = noSpace.split(/(\+|\-|\*|\/)/ );

var total = parseInt(inputArr[0]);

for (x = 0; x < inputArr.length; x++) {
    switch (true) {
        case inputArr[(x + 1)] == "+" :
            total += parseInt(inputArr[x + 2]);
            break;

        case inputArr[(x + 1)] == "-":
            total -= parseInt(inputArr[x + 2]);
            break;

        case inputArr[(x + 1)] == "/":
            total /= parseInt(inputArr[x + 2]);
            break;

        case inputArr[(x + 1)] == "*":
            total *=parseInt(inputArr[x + 2]);
            break;

    }
}

console.log(total);




