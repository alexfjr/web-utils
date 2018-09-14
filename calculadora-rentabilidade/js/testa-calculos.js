// Arquivo para testar os cálculos

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


testaJurosCompostos(200, 0.6, 12);
testaJurosCompostos(5000, 1, 18);
testaJurosCompostos(4000, 1, 1);
