# npwp-validator

Package `npwp-validator` adalah library yang menyediakan fungsi-fungsi untuk melakukan validasi Nomor Pokok Wajib Pajak (NPWP) Indonesia. Fungsi-fungsi ini membantu dalam memvalidasi NPWP sesuai dengan format yang ditentukan.

## Instalasi

Menggunakan npm:

```bash
$ npm install npwp-validator
```

Menggunakan yarn:

```bash
$ yarn add npwp-validator
```

Setelah package terinstal, Anda dapat meng-import library menggunakan cara `import`

```js
import npwp from 'npwp-validator';
```

Atau dengan cara `require`

```js
const npwp = require('npwp-validator');
```

## Penggunaan

Berikut adalah fungsi-fungsi yang tersedia untuk digunakan.

### `is_valid`
Fungsi ini mengembalikan nilai boolean yang menunjukkan apakah NPWP yang diberikan valid sesuai format atau tidak.

```js
const example1 = npwp.is_valid('48.903.841.4-722.000');
console.log(example1); // Output: true

const example2 = npwp.is_valid('489038414722000');
console.log(example2); // Output: true

const example3 = npwp.is_valid('01.234.567.8-901.234');
console.log(example3); // Output: false

const example4 = npwp.is_valid('012345678901234');
console.log(example4); // Output: false
```

### `compact`
Fungsi ini menghapus spasi, strip, dan karakter pemisah lainnya dari NPWP yang diberikan.

```js
const example = npwp.compact('48.903.841.4-722.000');
console.log(example); // Output: '489038414722000'
```

### `format`
Fungsi ini memformat NPWP yang diberikan ke dalam format yang umum digunakan di Indonesia.

```js
const example = npwp.format('489038414722000');
console.log(example); // Output: '48.903.841.4-722.000'
```

## Lisensi

[MIT](https://github.com/ibamibrhm/npwp-validator/blob/master/LICENSE)
