import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';
import NotificacoesScreen from '../screens/NotificacoesScreen';
import DadosContaScreen from '../screens/DadosContaScreen';
import PagamentosScreen from '../screens/PagamentosScreen';
import AjudaScreen from '../screens/AjudaScreen';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';
import SegurancaScreen from '../screens/SegurancaScreen';

import InformacoesPessoaisScreen from '../screens/InformacoesPessoaisScreen';
import InformacoesAcessoScreen from '../screens/InformacoesAcessoScreen';
import AnunciosScreen from '../screens/AnunciosScreen';

import CartoesSalvosScreen from '../screens/CartoesSalvosScreen';
import EnderecoCobrancaScreen from '../screens/EnderecoCobrancaScreen';
import HistoricoPagamentosScreen from '../screens/HistoricoPagamentosScreen';
import AdicionarCartaoScreen from '../screens/AdicionarCartaoScreen';

import AlterarSenhaScreen from '../screens/AlterarSenhaScreen';
import AcessoBiometricoScreen from '../screens/AcessoBiometricoScreen';

import GerenciarNotificacoesScreen from '../screens/GerenciarNotificacoesScreen';
import SobreVersaoScreen from '../screens/SobreVersaoScreen';
import LimparHistoricoScreen from '../screens/LimparHistoricoScreen';
import SairScreen from '../screens/SairScreen';

import FaqScreen from '../screens/FaqScreen';
import ContatoSuporteScreen from '../screens/ContatoSuporteScreen';
import ReportarProblemaScreen from '../screens/ReportarProblemaScreen';

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tela principal do Perfil */}
      <Stack.Screen name="PerfilHome" component={ProfileScreen} />

      {/* Telas diretas do menu */}
      <Stack.Screen name="Notificacoes" component={NotificacoesScreen} />
      <Stack.Screen name="DadosConta" component={DadosContaScreen} />
      <Stack.Screen name="Pagamentos" component={PagamentosScreen} />
      <Stack.Screen name="Ajuda" component={AjudaScreen} />
      <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
      <Stack.Screen name="Seguranca" component={SegurancaScreen} />

      {/* Subtelas - Dados da Conta */}
      <Stack.Screen name="InformacoesPessoais" component={InformacoesPessoaisScreen} />
      <Stack.Screen name="InformacoesAcesso" component={InformacoesAcessoScreen} />
      <Stack.Screen name="Anuncios" component={AnunciosScreen} />

      {/* Subtelas - Pagamentos */}
      <Stack.Screen name="CartoesSalvos" component={CartoesSalvosScreen} />
      <Stack.Screen name="EnderecoCobranca" component={EnderecoCobrancaScreen} />
      <Stack.Screen name="HistoricoPagamentos" component={HistoricoPagamentosScreen} />
      <Stack.Screen name="AdicionarCartao" component={AdicionarCartaoScreen} />

      {/* Subtelas - Segurança */}
      <Stack.Screen name="AlterarSenha" component={AlterarSenhaScreen} />
      <Stack.Screen name="AcessoBiometrico" component={AcessoBiometricoScreen} />

      {/* Subtelas - Configurações */}
      <Stack.Screen name="GerenciarNotificacoes" component={GerenciarNotificacoesScreen} />
      <Stack.Screen name="SobreVersao" component={SobreVersaoScreen} />
      <Stack.Screen name="LimparHistorico" component={LimparHistoricoScreen} />
      <Stack.Screen name="Sair" component={SairScreen} />

      {/* Subtelas - Ajuda */}
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="ContatoSuporte" component={ContatoSuporteScreen} />
      <Stack.Screen name="ReportarProblema" component={ReportarProblemaScreen} />
    </Stack.Navigator>
  );
}
