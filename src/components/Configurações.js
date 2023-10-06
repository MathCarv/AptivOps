import React from 'react';
import { View, Text } from 'react-native';

const TelaPadraoWidgetPreview = ({ route }) => {
  const { widgetLabel } = route.params;

  return (
    <View>
      <Text>Tela Padrão Widget Preview - {widgetLabel}</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
};

export default TelaPadraoWidgetPreview;
