import getData from "./data.js";
getData(1)
    .then(data => console.log(data));
// log'a basınca promise bir yapı geliyor promise dönen yapılarda çıktıyı görmek için .then li kısımı yazman gerekiyor