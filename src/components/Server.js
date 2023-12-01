const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurando a conexão com o MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/AptivOps';

// Garanta que a conexão seja estabelecida antes de prosseguir
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o MongoDB:', error.message);
  });

// Definindo o esquema do MongoDB para Indicadores
const indicadorSchema = new mongoose.Schema({
  nome: String,
  valor: Number,
  mes: String,
}, { collection: 'Indicadores' });  // Indicando o nome da coleção

const Indicador = mongoose.model('Indicador', indicadorSchema);

// Definindo o esquema do MongoDB para IndicadoresGastos
const indicadorGastosSchema = new mongoose.Schema({
  nome: String,
  valor: Number,
  mes: String,
}, { collection: 'IndicadoresGastos' });  // Indicando o nome da coleção

const IndicadorGastos = mongoose.model('IndicadorGastos', indicadorGastosSchema);

// Middleware para facilitar a análise de dados JSON
app.use(bodyParser.json());

// Rota para obter todos os indicadores
app.get('/indicadores', async (req, res) => {
  try {
    const indicadores = await Indicador.find();
    res.json(indicadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para adicionar um novo indicador
app.post('/indicadores', async (req, res) => {
  const indicador = new Indicador({
    nome: req.body.nome,
    valor: req.body.valor,
    mes: req.body.mes,
  });

  try {
    const novoIndicador = await indicador.save();
    res.status(201).json(novoIndicador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para obter todos os indicadores de gastos
app.get('/indicadores-gastos', async (req, res) => {
  try {
    const indicadoresGastos = await IndicadorGastos.find();
    res.json(indicadoresGastos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para adicionar um novo indicador de gastos
app.post('/indicadores-gastos', async (req, res) => {
  const indicadorGastos = new IndicadorGastos({
    nome: req.body.nome,
    valor: req.body.valor,
    mes: req.body.mes,
  });

  try {
    const novoIndicadorGastos = await indicadorGastos.save();
    res.status(201).json(novoIndicadorGastos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
