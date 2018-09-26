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

function testaDiasEntre(dataInicial, dataFinal) {
   console.log("Dias entre: " + formatDate(dataInicial)
      + " e " + formatDate(dataFinal) + ": "
      + daysBetween(dataInicial,dataFinal));
}

function testaSpecificDayBetween(dataInicial, dataFinal, dia, inclusivo) {
   console.log("Dia "+dia+" entre: " + formatDate(dataInicial)
      + " e " + formatDate(dataFinal) + ": "
      + specificDayBetween(dataInicial,dataFinal,dia,inclusivo));
}


function testaHolydaysBetween(dataInicial, dataFinal, comSabado, comDomingo) {
   console.log("Feriados entre: " + formatDate(dataInicial)
      + " e " + formatDate(dataFinal) + ": "
      + holydaysBetween(dataInicial,dataFinal,comSabado,comDomingo));
}

testaJurosCompostos(200, 0.6, 12);
testaJurosCompostos(5000, 1, 18);
testaJurosCompostos(4000, 1, 1);

// meses vão de 0 a 11 no JavaScript
testaDiasEntre(new Date(2018, 0, 1), new Date(2019, 0, 1));
testaDiasEntre(new Date(2018, 0, 1), new Date(2018, 0, 8));
testaDiasEntre(new Date(2018, 4, 1), new Date(2018, 5, 1));
testaDiasEntre(new Date(2018, 7, 15), new Date(2018, 5, 1));

console.log("-----------------------------");
testaSpecificDayBetween(new Date(2018, 0, 1), new Date(2019, 0, 1), 0, true);
testaSpecificDayBetween(new Date(2018, 0, 1), new Date(2018, 0, 8), 2, true);
testaSpecificDayBetween(new Date(2019, 4, 1), new Date(2019, 5, 1), 1, true);
testaSpecificDayBetween(new Date(2019, 7, 15), new Date(2019, 5, 1), 4, true);

console.log("-------------- Feriados ---------------");
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2019, 0, 1));
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2018, 0, 8));
testaHolydaysBetween(new Date(2019, 2, 1), new Date(2019, 11, 1));
testaHolydaysBetween(new Date(2019, 7, 15), new Date(2019, 5, 1));

console.log("-------------- Feriados com sábado ---------------");
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2019, 0, 1), true);
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2018, 0, 8), true);
testaHolydaysBetween(new Date(2019, 2, 1), new Date(2019, 11, 1), true);
testaHolydaysBetween(new Date(2019, 7, 15), new Date(2019, 5, 1), true);

console.log("-------------- Feriados com sábado e domingo ---------------");
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2019, 0, 1), true, true);
testaHolydaysBetween(new Date(2018, 0, 1), new Date(2018, 0, 8), true, true);
testaHolydaysBetween(new Date(2019, 2, 1), new Date(2019, 11, 1), true, true);
testaHolydaysBetween(new Date(2019, 7, 15), new Date(2019, 5, 1), true, true);
