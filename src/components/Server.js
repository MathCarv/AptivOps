const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

const cosmosDBEndpoint = 'https://aptivdb.mongo.cosmos.azure.com:443/';
const primaryKey = 'WTNyLSxKkWgQIPXI9gkK17wPkqqZlkiz7hTdRzuacpksYCbnrAovr9Ca7F2H0j5jZexAIywkn4P4ACDbNCVtng==';
const dbName = 'aptivdb'; 

const url = `mongodb://${cosmosDBEndpoint}:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@aptivdb`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao Azure Cosmos DB:', err);
  } else {
    const db = client.db(dbName);

    app.get('/', (req, res) => {
      res.send('Bem-vindo ao servidor Express com Azure Cosmos DB (MongoDB API)!');
    });

    app.listen(port, () => {
      console.log(`Servidor Express está ouvindo na porta ${port}`);
    });
  }
});
