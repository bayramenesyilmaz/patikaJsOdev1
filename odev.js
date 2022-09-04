let isim = document.querySelector("#isim");
let saatAlani = document.querySelector(".saat")
let userName = prompt("Adınızı Giriniz : ");



function clock() {
    let tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let _date = new Date();
    let days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]
    saatAlani.innerHTML = `${saat} : ${dakika} : ${saniye} ${days[_date.getDay()]}  `
    isim.innerHTML = `${userName}`;
}

setInterval(clock, 100)