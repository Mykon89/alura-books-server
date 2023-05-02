const express = require('express');
const rotaLivro = require('./rotas/livro');
<<<<<<< HEAD

const app = express();
app.use(express.json());

app.use('/livros', rotaLivro);
=======
const rotaFavorito = require('./rotas/favorito');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);
>>>>>>> ab9ddc73ed3498f19449df9c22b7290660573acf

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
