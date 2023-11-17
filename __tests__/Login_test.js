import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../src/components/Login';

jest.mock('@react-native-picker/picker', () => {
  const { View } = require('react-native');
  return {
    Picker: (props) => {
      return <View>{props.children}</View>;
    },
    ...jest.requireActual('@react-native-picker/picker'),
  };
});

test('renderiza o componente Login', () => {
  const { getByText, getByTestId } = render(<Login />);
  const loginText = getByText(/• Aptiv/i);
  expect(loginText).toBeTruthy();

  // Adicione testIDs conforme necessário
  const logo = getByTestId('logo');
  const loginButton = getByTestId('loginButton');
  const passwordInput = getByTestId('passwordInput');

  expect(logo).toBeTruthy();
  expect(loginButton).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});

test('renderiza o logo', () => {
  const { getByTestId } = render(<Login />);
  const logo = getByTestId('logo');
  expect(logo).toBeTruthy();
});

test('renderiza o botão de login', () => {
  const { getByTestId } = render(<Login />);
  const loginButton = getByTestId('loginButton');
  expect(loginButton).toBeTruthy();
});

test('renderiza o campo de senha', () => {
  const { getByTestId } = render(<Login />);
  const passwordInput = getByTestId('passwordInput');
  expect(passwordInput).toBeTruthy();
});
