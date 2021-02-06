const ages = [11, 12, 13, 14, 15];
const ages2 = [34, 35, 23, 5, 34, 2];
const ages3 = [34, 35, 3, 5, 4, 4];
const allAges = ages.concat(ages2).concat(ages3).concat([4]);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 545;
const minister = 3434;
const sochib = 3423;
const takaPoisa = [545, 3434, 3423];
const maximum = Math.max(...takaPoisa);
console.log(maximum);