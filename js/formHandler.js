// js/formHandler.js

import { addProduto } from './api.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('product-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome-produto').value;
        const preco = document.getElementById('valor-produto').value;
        const imagemInput = document.getElementById('imagem-produto');
        
        // Verifica se um arquivo foi selecionado
        if (imagemInput.files.length === 0) {
            alert("Por favor, selecione uma imagem.");
            return;
        }

        const imagemFile = imagemInput.files[0];

        // Vamos usar FileReader para obter a URL da imagem
        const reader = new FileReader();

        reader.onloadend = async () => {
            const novoProduto = {
                nome: nome,
                preco: preco,
                imagem: reader.result,  // Usar a URL da imagem obtida do FileReader
                ID: Date.now()  // Utilizando timestamp como ID único
            };

            const produtoCriado = await addProduto(novoProduto);

            if (produtoCriado) {
                alert('Produto adicionado com sucesso!');
            } else {
                alert('Erro ao adicionar produto.');
            }

            form.reset();
        };

        reader.readAsDataURL(imagemFile);  // Lê o arquivo de imagem como uma URL
    });
});
