export interface ProdutoDTO {
    idProduto?: number;
    descricao: string;
    validade: string;
    preco: number;
    qtdEstoque: number;
    qtdMinEstoque: number;
}