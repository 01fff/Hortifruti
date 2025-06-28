import { supabase } from './supabase';
import { Loja } from '../types';

export async function buscarLojas(): Promise<Loja[]> {
  const { data, error } = await supabase
    .from('lojas')
    .select('*');

  if (error) {
    console.error('Erro ao buscar lojas:', error);
    return [];
  }
  return data as Loja[];
}

export async function buscarLojaPorId(lojaId: string): Promise<Loja | null> {
  const { data, error } = await supabase
    .from('lojas')
    .select('*')
    .eq('id', lojaId)
    .single();

  if (error) {
    console.error('Erro ao buscar loja:', error);
    return null;
  }
  return data as Loja;
}