var shoppinCart = {
    Books: 3,
    sunglass: 1,
    Keyboard: 5,
    Mouse: 1,
    Pen: 25,
    Shoes: 2,
}

const keys = Object.keys (shoppinCart);
console.log(keys);

const values = Object.values (shoppinCart);
console.log(values);

//! Var Keys [ 'Books', 'sunglass', 'Keyboard', 'Mouse', 'Pen', 'Shoes' ]
for ( var i= 0; i<keys.length; i++){
    console.log(keys[i]);
}