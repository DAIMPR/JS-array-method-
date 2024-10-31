let str = 'prosper ikechukwu';

//touppercase()
console.log(str.toUpperCaseI());

//tolowercase
console.log('JOHN'.toLowerCase());

//indexOf()
console.log(str.indexOf('i'));

//charAt
console.log(str.charAt(10));

//includes
console.log(str.includes('w'))

//slice
console.log(str.slice(8,11));

//split
console.log(str.split(' '));

//trim
console.log(' jeff hugh    '.trim())

// console.log(str.charAt(14).replaceAll('z'))
// console.log(str)

let modified = str.split(' ').map(item => {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase())
}).join(' ')

// console.log(str.replace(str.charAt(0), str.charAt(0),toUpperCase()));

console.log(modified)