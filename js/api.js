// js/api.js

// URL base do JSON Server
const baseUrl = "http://localhost:3000/produtos";

// Função assíncrona para realizar a requisição GET
async function getProdutos() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}

// Função assíncrona para realizar a requisição POST
async function addProduto(produto) {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const novoProduto = await response.json();
        return novoProduto;
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
    }
}

// Função assíncrona para realizar a requisição DELETE
async function deleteProduto(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

// Exportando as funções para serem utilizadas em outros arquivos
export { getProdutos, addProduto, deleteProduto };
