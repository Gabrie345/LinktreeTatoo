const fs = require('fs');
const path = require('path');

const pastaImagens = path.join(__dirname, 'imagens');

// Lê os arquivos da pasta
const arquivos = fs.readdirSync(pastaImagens);

// Escreve a lista diretamente como array
fs.writeFileSync('imagens.json', JSON.stringify(arquivos, null, 2));

console.log('✅ Arquivo imagens.json gerado com sucesso!');
