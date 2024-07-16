let user = window.prompt(" please enter your name");
let showName = document.getElementById("myName").innerHTML = user;

function date() {
    let today = new Date();
    // gününü string olarak döndürür
    function day() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[today.getDay()];
    }
    // saat dakika saniye ve günü tek değişkene atama
    let currentDate = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + day();
    document.getElementById("myClock").innerHTML = currentDate;
}

// ekran ilk açıldığında saati gösterir
date();
// her saniye date fonksiyonunu calıstırır
setInterval(date, 1000);