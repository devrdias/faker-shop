var faker = require('faker');
// var faker = require('faker/locale/de'); // loads just the required language

console.log('===================================================================');
console.log('Welcome to the Faker API');
console.log('a JavaScript API that generates fake data for almost everything ...');
console.log('===================================================================');


// sets locale to de 
faker.locale = 'pt_BR';


console.log('Welcome '+ faker.name.firstName() + ' !');
for (var index = 0; index < 10; index++) {
    console.log(faker.commerce.product() + ' - $' + faker.commerce.price());
};