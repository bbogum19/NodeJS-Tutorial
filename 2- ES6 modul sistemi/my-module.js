const hello = name => console.log(`Hello ${name}`); // ***tek bir parametre ve tek bir işlem yapacaksa arrow function da parentezlere gerek yoktu***

const topla = (a, b) => a + b;

const cikar = (a, b) => a - b;

const user = {
    name: "berkay",
    surname: "bogum"
}

const users = [
    {
        id: 0,
        name: "burak"
    },
    {
        id: 1,
        name: "erenay"
    }
]


export { topla, cikar, user, users };
export default hello;
// export işlemlerinde default olarak cıkarmış oldugun fonksiyonu süslü parentez icine alman gerekmez fakat digerlerinde gerekir.