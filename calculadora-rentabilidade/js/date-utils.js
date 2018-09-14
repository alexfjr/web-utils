function daysBetween(dataInicial, dataFinal) {
   var umDia = 24*60*60*1000;
   var diferDias = Math.round(Math.abs(
      (dataFinal.getTime() - dataInicial.getTime())/(umDia)));
   return diferDias;
}

function formatDate(date) {
   var day = date.getDate();
   if (day < 10) day = "0" + day.toString();

   var month = date.getMonth() + 1;
   if (month < 10) month = "0" + month;

   var year = date.getFullYear();

   return day + "/" + month + "/" + year;
}