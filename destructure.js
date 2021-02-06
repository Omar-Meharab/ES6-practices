const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'kochu khet', phone: '12342424', friends: ['Tom Hanks', 'Tom Cruise', 'Jackson'] };

const { phone, name, address } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kolabagan',
        leader: 'tiger'
    }
}

const { leader } = complexObject.info;

// const gfName = person.gfName;

// const gfName = person.gfName;
// const phone = person.phone;

const friends = ['v', 'rapmon', 'suga', 'jimin', 'jhope', 'junghook', 'jin'];
const [one, two, ...remaining] = friends;


console.log(leader);
console.log(remaining);
console.log(address);
console.log(name);
console.log(phone);