
// pegar o input 
// se for sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
// se ela escolher não, mostra todos os livros em ordem crescente pela quantidade de páginas.

const livros = require('./database');
const readLine = require('readline-sync');

const entradaInicial = readLine.question('Deseja buscar um livro ? S/N ');

if(entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis: ');
  console.log('Produtividade', '/Historias', '/Americas', '/Vida', '/Tecnologia');

  const entradaCategoria = readLine.question('Qual categoria você escolhe ?');

  const retorno = livros.filter((livro) => livro.categoria === entradaCategoria);

  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas -b.paginas)
  console.log('Essas são todos os livros disponiveis: ');
  console.table(livrosOrdenados);
}
