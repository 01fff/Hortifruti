import { supabase } from './supabase';
import { ProdutoPorLoja } from '../types';

export async function buscarProdutosPorLoja(lojaId: string): Promise<ProdutoPorLoja[]> {
  const { data, error } = await supabase
    .from('loja_produtos')
    .select(`
      id,
      preco,
      estoque,
      disponivel,
      criado_em,
      updated_at,
      produto_id:produtos (
        id,
        nome,
        imagem,
        categoria,
        descricao,
        criado_em
      )
    `)
    .eq('loja_id', lojaId);

  if (error) {
    console.error('Erro ao buscar produtos:', error.message);
    return [];
  }

  return data as ProdutoPorLoja[];
}