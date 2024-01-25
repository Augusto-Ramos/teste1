// Função para encontrar a frase com mais letras
function encontrarMaiorFrase(frase1, frase2, frase3) {
  const tamanhoFrase1 = frase1.replace(/\s/g, '').length;
  const tamanhoFrase2 = frase2.replace(/\s/g, '').length;
  const tamanhoFrase3 = frase3.replace(/\s/g, '').length;

  if (tamanhoFrase1 >= tamanhoFrase2 && tamanhoFrase1 >= tamanhoFrase3) {
    return { frase: frase1, tamanho: tamanhoFrase1 };
  } else if (tamanhoFrase2 >= tamanhoFrase1 && tamanhoFrase2 >= tamanhoFrase3) {
    return { frase: frase2, tamanho: tamanhoFrase2 };
  } else {
    return { frase: frase3, tamanho: tamanhoFrase3 };
  }
}

// Solicitar ao usuário para inserir as frases
const frase1 = prompt('Digite a primeira frase:');
const frase2 = prompt('Digite a segunda frase:');
const frase3 = prompt('Digite a terceira frase:');

// Encontrar e exibir a frase com mais letras e seu tamanho
const maiorFraseInfo = encontrarMaiorFrase(frase1, frase2, frase3);
console.log(
  `A frase com mais letras é: "${maiorFraseInfo.frase}"\nNúmero de caracteres: ${maiorFraseInfo.tamanho}`
);
