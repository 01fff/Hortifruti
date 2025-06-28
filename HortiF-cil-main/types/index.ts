export type Produto = {
  id: string;
  nome: string;
  imagem: string;
  categoria: string | null;
  descricao: string | null;
  criado_em: string;
};

export type Loja = {
  id: string;
  nome: string;
  rating: number;
  delivery: string;
  deliveryTime: string;
  logo_url: string;
  criado_em: string;
};

export type LojaProduto = {
  id: string;
  loja_id: string;
  produto_id: string;
  preco: number;
  estoque: number;
  disponivel: boolean;
  criado_em: string;
  updated_at: string;
};

export type ProdutoPorLoja = LojaProduto & {
  produto: Produto;
};
