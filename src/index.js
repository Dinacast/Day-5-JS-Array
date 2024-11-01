import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//membuat array
//array literal
var buah2an = ["pisang", "mangga", "jeruk", "semangka"];
console.log("Isi dari array buah2an:" + buah2an);
//array constructor
var pohon2an = new Array("beringin", "bakau", "randu");
console.log("Isi dari array pohon2an:" + pohon2an);

//mengakses array ke=n
console.log(buah2an[2]);
console.log(buah2an.length);

//bekerja dengan array

//menambahkan elemen setelah elemen terakhir
buah2an.push("nangka");
console.log(buah2an);
console.log([...pohon2an, "kamboja"]);
console.log(pohon2an);

//mengambil elemen urutan terakhir
console.log(buah2an.pop());
console.log(buah2an);
console.log(pohon2an[pohon2an.length - 1]);

//menambahkan elemen sebelum elemen pertama
buah2an.unshift("apel");
console.log(buah2an);
//menambahkan elemen sebelum elemen pertama, tanpa mengubah array awal
console.log(["durian", ...pohon2an]);

//meengambil elemen pertama
//elemen array buah2an akan berubah, array pertama
console.log(buah2an.shift());
console.log(buah2an);
//elemen tidak berubah
console.log(pohon2an[0]);
console.log(pohon2an);

//mengghapus 2 elemen dari index ke-1
buah2an.splice(0, 2);
console.log(buah2an);

//contoh modifikasi array dengan filter
let cities = [
  { nama: "Los Angeles", populasi: 3792621 },
  { nama: "New York", populasi: 8175133 },
  { nama: "Chicago", populasi: 2695598 },
  { nama: "Houston", populasi: 2099451 },
  { nama: "Philadephia", popalsi: 1526006 }
];

//ingin mengambil kota dengan populasi >3juta
function cekPopulasi(e) {
  return e.populasi > 3000000;
}
let bigCities = cities.filter(cekPopulasi);
console.log(bigCities);

//penggunaan map
let kotabesar = bigCities.map(myfunc);
function myfunc(e, i) {
  return "kota besar ke-" + (i + 1) + " adalah " + e.nama;
}
console.log(kotabesar);
