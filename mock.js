// mock.js

// Simula o módulo react-native-azure-ad-2
jest.mock('react-native-azure-ad-2', () => ({
    AzureInstance: jest.fn(() => ({
      login: jest.fn(),
      getUserInfo: jest.fn(),
    })),
    AzureLoginView: 'AzureLoginView',
  }));
  
  // Simula o módulo react-native/Libraries/Network/RCTNetworking
  jest.mock('react-native/Libraries/Network/RCTNetworking', () => ({
    clearCookies: jest.fn(),
  }));
  
  // Simula o módulo react-native-webview
  jest.mock('react-native-webview', () => 'WebView');
  
  // Simula o módulo @react-navigation/native
  jest.mock('@react-navigation/native', () => ({
    useFocusEffect: jest.fn(),
  }));
  
  // Simula o módulo @react-native-picker/picker
  jest.mock('@react-native-picker/picker', () => ({
    Picker: 'Picker',
  }));
  
  // Simula o módulo react-native/Libraries/Components/AccessibilityInfo/AccessibilityInfo
  jest.mock('react-native/Libraries/Components/AccessibilityInfo/AccessibilityInfo', () => ({
    fetch: jest.fn(),
  }));
  
  // Exporta o objeto com as simulações
  module.exports = {};
  