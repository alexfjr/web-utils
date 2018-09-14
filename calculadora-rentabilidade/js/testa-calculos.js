// Arquivo para testar os c�lculos

function testaJurosCompostos(capital, taxaPercentual, tempo) {
   var montante = calculaMontanteJurosCompostos(capital, taxaPercentual, tempo);
   var lucro = calculaLucroJurosCompostos(capital, taxaPercentual, tempo)
   console.log("Capital: " + capital.toFixed(2)
      + ", Taxa: " + taxaPercentual + "%"
      + ", Tempo: " + tempo);
   console.log("Montante Final: " + montante.toFixed(2));
   console.log("Lucro: " + lucro.toFixed(2));
   console.log("-----------------------------");
}

function testaDiasEntre(dataInicial, dataFinal) {
   console.log("Dias entre: " + formatDate(dataInicial)
      + " e " + formatDate(dataFinal) + ": "
      + daysBetween(dataInicial,dataFinal));
}


testaJurosCompostos(200, 0.6, 12);
testaJurosCompostos(5000, 1, 18);
testaJurosCompostos(4000, 1, 1);

// meses v�o de 0 a 11 no JavaScript
testaDiasEntre(new Date(2018, 0, 1), new Date(2019, 0, 1));
testaDiasEntre(new Date(2018, 0, 1), new Date(2018, 0, 8));
testaDiasEntre(new Date(2018, 4, 1), new Date(2018, 5, 1));
testaDiasEntre(new Date(2018, 7, 15), new Date(2018, 5, 1));