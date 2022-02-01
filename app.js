const express = require('express');
const { randomUUID } = require('crypto');
const app = express();

app.use(express.json())

const products = [];

/*
POST -> Inserir dados;
GET -> Buscar um ou mais dados;
PUT -> Alterar um dado;
Delete -> Remover um dado
*/

app.post('/products', ( req , res) => {
    //Nome e preço = name,price;

    const {name , price} = req.body;
    const product =  {
        name,
        price,
        id: randomUUID()
    };

    products.push(product);

    return res.json(product);
});

app.get('/products/:id', (req , res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    return res.json(product);
});


app.get('/products', (req ,res) => {
    return res.json(products);
})


app.put('/products/:id', (req , res ) => {
    const { id } = req.params;
    const {name , price } = req.body;
    
    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
    };
});

app.delete('/products/:id', (req , res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);

    return res.json({message: "Produto removido com sucesso"})

});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('server is running'))