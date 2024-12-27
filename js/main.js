// js/main.js

import { getProdutos } from './api.js';

async function mostrarProdutos() {
    const produtos = await getProdutos();
    console.log(produtos);
}

mostrarProdutos();


import { addProduto } from './api.js';

async function criarNovoProduto() {
    const novoProduto = {
        nome: "brinquedo",
        preco: "20",
        imagem: "https://example.com/imagem.jpg",
        ID: 4
    };
    
    const produtoCriado = await addProduto(novoProduto);
    console.log("Produto criado:", produtoCriado);
}

criarNovoProduto();
