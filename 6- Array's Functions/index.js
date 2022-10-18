const users = [
    {
        name: "Berkay",
        age: 10
    },
    {
        name: "Berkay",
        age: 27
    },
    {
        name: "Deniz",
        age: 38
    }
]
// push: array'in sonuna ekleme yapar
const newUser = { name: "Erenay", age: 18 };
users.push(newUser);
console.log("Array'e ekleme yapıldı. :", users);

// map: arrayin icinde teker teker gezinmeye yarar. gezinirkende arrayin herbir elemanını bir değişkene atar. Asagıdaki örnekte item degiskenine attık
users.map(item => console.log("kullancıların isimleri: ", item.name));

// find: arrayin icinde istedigimiz özelliktekini bulmaya saglar. İlk gördügünü kabul eder (tek 1 sonuc döner)
const result = users.find(item => item.name === "Berkay");
console.log("İsmi Berkay olan ilk elemanı bulmaya yarayan'find' methodu cıktısı:", result);

// filter: arrayın icindeki elemanları teker teker gezinir ve istedigimiz filtreleme islemini yapar.
const filtered = users.filter(item => item.name == "Berkay" && item.age > 10);
console.log("İsmi berkay olan ve 10 yasından büyük olan filtreleme islemini 'filter' methodu:", filtered);

// some: arrayin icerisinde en az 1 tane istedigimiz özellikten var mı yok mu diye bakar , geriye true veya false bir değer döner
const some = users.some(item => item.age === "10")
console.log("en az bir tane yası 10 olan kullanıcı var mı? 'some':", some); // '===' kullandıgımız icin tipleri uymadıgından dolayı false döndü

// every: arrayin içindeki bütün elemanlarda istedigimiz özellik var mı yok mu diye bakar ve geriye true veya false bir deger döner
const every = users.every(item => item.age > 5);
console.log("bütün kullancıların yasları 5 den büyük mü? 'every': ", every);


// includes: arrayin icerisinde istedigimiz özellik geciyor mu gecmiyor mu onu kontrol etmemizi saglar
const fruits = ["kavun", "karpuz", "elma"];

const isIncludes = fruits.includes("elma");
console.log("meyvelerin icerisinde elma var mı? 'includes'", isIncludes);