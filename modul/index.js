import { jumlah, kurang } from "./penjumlahan.js";
import toRupiah from "@develoka/angka-rupiah-js";
import express from "express";

console.log('gdsc trunojoyo')
let hasil = jumlah(1, 8);
console.log(hasil);

let hasil2 = kurang(10, 5);
console.log(hasil2);

const saldo = 50000000;
console.log(toRupiah(saldo, {
    floatingPoint: 0
}));

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     set.json;
//     res.setHeader('Content-Type', 'application/json');
//     res.writable('hello word')
//     res.end();
// });

// server.listen(3000,()=>{
//     console.log('server running on port 3000');
// })

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/about', (req, res) => {
    res.send('about me');
});

app.get('/gdsc/:nama', (req, res) => {
    const { nama } = req.params;
    res.send(`saya adalah ${nama}`);
});

app.get('/gdsc', (req, res) => {
    const { search } = req.query;
    res.send(`Saya adalah ${search}`);
});

app.use(express.json());

app.post('/api',(req, res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
})

app.listen(3000, () => {
    console.log('server running on port 3000');
});