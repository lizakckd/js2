'use strict';

let admin, name;
name = "Джон";
admin = name;
alert(admin);

const city = prompt('название города:');
const year = parseInt(prompt('год образования:'));
const pop = parseInt(prompt('население города:'));
const now = new Date().getFullYear();
const age = now - year;

alert(`Городу ${city} исполнилось ${age} лет с момента его образования. Население - ${pop} человек`);


const r = parseFloat(prompt('радиус круга:'));
const s = Math.PI * (r ** 2);
alert(`Площадь круга с радиусом ${r} равна ${s}`);


const x = parseFloat(prompt('первое число:'));
const y = parseFloat(prompt('второе число:'));

alert(`Сумма: ${x + y}\nРазность: ${x - y}\nЧастное: ${x / y}\nПроизведение: ${x * y}`);