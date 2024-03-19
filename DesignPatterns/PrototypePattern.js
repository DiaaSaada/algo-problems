/**
 * Intent
 * Prototype is a creational design pattern that lets you copy
 * existing objects without making your code dependent on their classes.
 * @type {{gender: string, name: string}}
 */

const employee = {
    name: 'Bob',
    gender: 'M',
};

const seller = Object.create(employee, {
    commission: { value: ( val) =>{ return val*0.05} }
});

console.log(seller.commission(100));
// in this case