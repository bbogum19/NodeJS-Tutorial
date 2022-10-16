import slugify from "slugify"; // ES6 ve sonrasında modulleri bu sekilde dahil edebiliriz fakat projemizin 'package.json' dosyasına ("type": "module") fieldsını eklemek gereklidir.
// bu sekilde import ettikten sonra "var slugify = require('slugify')" koduna gerek kalmadı.

const title = slugify("example some string lorem ipsum", "*");

console.log(title);

// Kendi Modulumuzu Yaratıp Kullanabiliriz:

import helloMyDefaultModul, { topla, cikar, user, users } from './my-module.js'; // import işlemlerinde default olarak export edilen fonksiyona degisken adı olarak istedigini verebilirsin ve süslü parentez icine almazsın.
// fakat default olmayan fonksiyonları import ederken süslü parentez icine alırsın ve fonksiyonun adını kullanmak zorunda olursun.

console.log(topla(2, 4));

console.log(cikar(4, 2));

helloMyDefaultModul("Berkay");


console.log("Objeyide export import edebiliriz:", user);

console.log("Arrayi de export import edebiliriz:", users);
