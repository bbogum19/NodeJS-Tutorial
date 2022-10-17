// Callback fonksiyon: bir fonksiyona parametre olarak bir baska fonksiyon verdigimiz fonksiyonlardır örneğin setInterval() fonksiyonu gibi

/*
    setInterval(() => {
        console.log("setInterval fonksiyonu: her 2. verdigimiz parametre milisaniyesinde bi calısır. yani her saniye bu log calisacak");
    }, 1000) // terminali durdurmak icin (ctrl + c) yapabilirsin 
*/

import fetch from 'node-fetch'; // fetch islemi bi apiye gidip veri cekmeye yarar ve bu fetchi kullanmak icin import etmen gerekiyor.
/* 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log("Users Yükleniyor.", users)

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(post1 => {
                console.log("Post 1 Yüklendi", post1);

                fetch('https://jsonplaceholder.typicode.com/posts/2')
                    .then(response => response.json())
                    .then(post2 => {
                        console.log("Post 2 Yüklendi", post2);
                    })
            }
            )

    })  /*
            post1 ve post2 fetchini fonksiyon icerisine fonksiyon olarak degilde dısarıda yeni bir fonksiyon olarak yaparsak senkron olarak calısmaz.
            ilk post2 de gelebilir , post1 de gelebilir (asenkron)
            senkron olarak(post2 den once post1 gelmesini istersek) calısmasını istersek bu sekilde kullanmamız lazım.
        */ // yukarıdaki kodun okunması cok karmasık oldugu icin asagıdaki gibi kullanmak daha kullanışlıdır: */

async function getData() {
    const users = await (
        await fetch('https://jsonplaceholder.typicode.com/users')).json();
    const post1 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
    const post2 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();

    console.log("Users", users);
    console.log("Post1", post1);
    console.log("Post2", post2);
}

getData();

// Yukarıda ki kodun aynısı calısır fakat bu sekilde okunması daha kolaydır.

// asenkron ve senkron olanları async ve await keywordları ile belirtmemiz gerekli. 





