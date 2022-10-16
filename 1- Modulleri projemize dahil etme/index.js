// 'npm init' komutu ile nodeJs projemizi olustururuz ve ilk proje dosyamız 'package.json' isimli dosya olur
// bu projeye ait olan bilgiler orada json dosyasında tutulur ve bu projeyi calıstırmak icin terminale 'node index.js' (json dosyamızda ilk calısacak olan dosyayı main kısmına index.js olarak tanımlamıstık) komutunu calıstırmamız gerekiyor.

/*
Node projesini calıstırmanın bir baska yontemi:
--JSON paketindeki "scripts" alanın içindeki test kısmına örneğin start dersek ve yanına da node index.js yazarsak
    (
        "scripts": {
        "start": "node index.js"
        }
    )
    bu hale geldikten sonra komut kısmına 'npm start' dememiz yeterli olacaktır.
*/
console.log("Hello Node");

/*
Projemize 'slugify modulünü' dahil etmek istersek: 
-- 'npm i slugify' komutunu calıstırıp bu modülün paketlerini projemize indiririz
-- bu modulün yararı: girdigimiz string ifadenin bosluklarına istedigimiz karekteri koyamak
ÖRNEĞİN:
*/

var slugify = require('slugify') // "npm i slugify" komutunu calıstırdıktan sonr bu modulu dahil ettik ve bunu kullanacagımızı söylemek icin 'require' ettik.

const title = slugify("example some string", "_"); // yazdıgımız stringdeki bosluklara '_' karekterini koymamızı saglar. modulleri fonksiyonlar gibi düsünebilirsin. isimizi kolaylaştıran paketlerdir.

console.log(title);

