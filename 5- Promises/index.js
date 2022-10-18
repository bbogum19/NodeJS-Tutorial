// Promise: .then ve .cath methodları olan fonksiyonlara denir ve bunları try cath gibi kullanabiliriz.
// Promiselerin resolve (try kısmı , fonksiyonda bir sorun yoksa calisacak olan kısım) ve reject (catch kısmı, hatayı yakalamıza yardımcı olan kısım) olmak üzere 2 parametre alır ve promiselar asagıdaki gibi yazılır:
// Promiseta .then deki fonksiyon , promisetaki resolve durumunda calisacak olan kısımdır.
// Promiseta .catch deki fonksiyon , promiseteki reject durumunda calisacak olan kısımdır.  
import axios from "axios";

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data)
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id);

        if (post_id === 1) {
            resolve(data);
        } else {
            reject("getPost promisesi catch'e düştü"); // basit bir örnek olarak kullanıcı 1. post dışında olan postları görünlemek isterse reject'e (catch) düşecek 
        }
    })
}
/*
(async () => {
    await getUsers()
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
    await getPost(1)
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
})(); 
*/ // Bu kod ile 
/* 
(async () => {
    try {
        const users = await getUsers();
        const post = await getPost(1);

        console.log(users);
        console.log(post);
    } catch (e) {
        console.log(e);
    }

})();
*/ // Bu kod aynı görevi görür

// Promiselarda yukarıda yorum satırında bulunan 2 koddan da daha kısa bir kod yazılabilir oda 'Promise.all' methodudur örneğin:

Promise.all([getUsers(), getPost(1)])
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
// Bu 'promise.all' methodu parametre olarak array alır ve arrayin icerisine promiselarımızı yazmamız gerekmektedir.
// console.log larda 