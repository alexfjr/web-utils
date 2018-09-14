
// Calcula o montante utilizando o m�todo de Juros Compostos
function calculaMontanteJurosCompostos(capital, taxaPercentual, tempo) {
   return capital * Math.pow((1 + (taxaPercentual/100)), tempo);
}

// Calcula o lucro utilizando o m�todo de Juros Compostos
function calculaLucroJurosCompostos(capital, taxaPercentual, tempo) {
   var montanteFinal = calculaMontanteJurosCompostos(capital, taxaPercentual, tempo);

   return montanteFinal - capital;
}