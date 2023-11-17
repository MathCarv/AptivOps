import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TelaPrincipal from '../src/components/TelaPrincipal';

// Mock do useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

test('renderiza o componente TelaPrincipal', () => {
  const { getByText, getByTestId } = render(<TelaPrincipal />);
  const principalText = getByText(/• Aptiv/i);
  expect(principalText).toBeTruthy();

  // Adicione testIDs conforme necessário
  const searchBar = getByTestId('searchBar');
  const principalIcon = getByTestId('principalIcon');
  const indicadoresIcon = getByTestId('indicadoresIcon');
  const configuracoesIcon = getByTestId('configuracoesIcon');

  expect(searchBar).toBeTruthy();
  expect(principalIcon).toBeTruthy();
  expect(indicadoresIcon).toBeTruthy();
  expect(configuracoesIcon).toBeTruthy();
});

test('renderiza a barra de pesquisa', () => {
  const { getByTestId } = render(<TelaPrincipal />);
  const searchBar = getByTestId('searchBar');
  expect(searchBar).toBeTruthy();
});

test('renderiza o ícone Principal', () => {
  const { getByTestId } = render(<TelaPrincipal />);
  const principalIcon = getByTestId('principalIcon');
  expect(principalIcon).toBeTruthy();
});

test('renderiza o ícone Indicadores', () => {
  const { getByTestId } = render(<TelaPrincipal />);
  const indicadoresIcon = getByTestId('indicadoresIcon');
  expect(indicadoresIcon).toBeTruthy();
});

test('renderiza o ícone Configurações', () => {
  const { getByTestId } = render(<TelaPrincipal />);
  const configuracoesIcon = getByTestId('configuracoesIcon');
  expect(configuracoesIcon).toBeTruthy();
});
