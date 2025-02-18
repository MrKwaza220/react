const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video game'],
};

let users = [{
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video game'],
},{
    id: '456',
    name: 'Helen Zille',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video game'],
},
{
    id: '789',
    name: 'Cyril Ramaphosa',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video game'],
},
];

const products = [{
    id: '1234',
    name: 'Speed Ball',
    price: 'R450',
    description: 'Puma, Fast Ball',
    rating: 4.5,
},
{   id: '5678',
    name: 'Chair',
    price: 'R200',
    description: 'Wheel, Black',
    rating: 4.5,   
},
{
    id: '7890',
    name: 'Flat-Screen Tv',
    price: 'R300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
}];

app.get('/current-user', (req, res) =>{
    res.json(currentUser);
});

app.get('/users/:id', (req, res) =>{
    const { id } = req.params;

    res.json(users.find(user => user.id ===id));
});

app.post('/users/:id', (req, res) =>{
    const {id} = req.params;
    const {user: updatedUser} = req.body;

    users = users.map(user => user.id === id ? updatedUser : user)
    res.json(users.find(user => user.id ===id));
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/product/:id', (req, res) =>{
    const {id} = req.params;

    res.json(products.find(product = product.id === id));
});

app.get('products', (req, res) =>{
    res.json(products);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});
