/* Apiden veri cekmek icin 'fetch' kullanmak yerine 'axios' kullanmak daha mantıklıdır. 
   Çünkü: axios kullanırsan fetchte yapmış olduğun işlemleki urlnin sonunda gelen .json ifadesini kullanmana gerek yoktur ve "async - await" 'li işlemlerde fetch kullanırsan 2 tane await yazmak durumunda kalırsın ama axiosta ise 1 tane await yazarsın ve .json kısmını yazmazsın  
*/
import axios from "axios";


(async () => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
    // burada const{ data: 'parametre adı' } yazarak bir obje tanımı yaptık ve data keywordünü kullanarak her birini(users, post1, post2) bu objenin icerisine yazdık diye düşenbilirsin
    // axios kullanırken await yapısını kullanmak zorundasın, await yapısını kullanmak icinde async kullanmak zorundasın.
    
    console.log("Users Bilgileri", users);
    console.log("Post 1", post1);
    console.log("Post 2", post2);
})(); // isimsiz fonksiyon ile async'li işlem yapmak istersen de bu sekilde kullanılabilinir. *** 2 tane normal parentez açıp kapa ve 1. parentezin icerisine arrow function yaz***



