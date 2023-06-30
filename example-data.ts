import { fakerIT as faker} from '@faker-js/faker';
import { json } from 'body-parser';
import { writeFileSync } from 'node:fs';


function generateRandomProduct(){
    return{
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        netPrice: parseFloat(faker.commerce.price()),
        weight: faker.number.int({min: 50, max: 2000}),
        discount: faker.number.float({min: 0, max: 1, precision: 0.01}),
    }
}

function generateProducts(num: number){
    const data = Array.from({length: num}, () => generateRandomProduct());
    writeFileSync('./product.json', JSON.stringify(data), {encoding: 'utf-8'});
}

generateProducts(200);

