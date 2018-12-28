// // Задача 1.

let x = 'hidden';

if (x = 'hidden') {
    let x = 'visible';
} else {
    let x = 'hidden';
}

console.log (x);


// // задача 2.

let y = 0;

if (y = 0) {
    let y = 1;
} else if (y < 0) {
    let y = 'less then zero';
} else { 
    y *= 10;
}

console.log (y);



// //  задача 3.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};

if (car.age > 5) {
    car['needRepair'] = "true";
    console.log ('Need Repair');
} else {
    car['needRepair'] = "true";
}

console.log (car);


// задача 4.

let item = { 
    name: 'Intel core i7', 
    price: '100$',
    discount: '15%'   
};

if (item.discount = true) {
    item.priceWithDiscount = '85$'
    console.log (item.priceWithDiscount);
} else {
    console.log (item.price);
}



// задача 6.


let product = {
    name: 'Яблоко',
    price: '50$',    
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price,10) >= 10) {
    console.log (product.name);
} else if (parseInt(product.price,10) <= 20) {
    console.log (product.name);
} else {
    console.log ('товаров не найдено');
}

