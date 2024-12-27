// js/listProducts.js

import { getProdutos, deleteProduto } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const productContainer = document.querySelector('[data-product-container]');

    const produtos = await getProdutos();

    if (produtos && produtos.length > 0) {
        produtos.forEach(produto => {
            // Filtra o produto com ID: 1 (Super Man)
            if (produto.ID !== 1) {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.id = `produto-${produto.ID}`;

                productCard.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h2>${produto.nome}</h2>
                    <p>Preço: R$ ${produto.preco}</p>
                    <button class="delete-btn" data-id="${produto.ID}">Excluir</button>
                `;

                productContainer.appendChild(productCard);

                const deleteBtn = productCard.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', async () => {
                    const id = deleteBtn.getAttribute('data-id');
                    await deleteProduto(id);
                    productCard.remove();
                });
            }
        });
    } else {
        productContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
});
