# npwp-validator

[![npm version](https://img.shields.io/npm/v/npwp-validator.svg?style=flat-square)](https://www.npmjs.org/package/npwp-validator)
[![npm downloads](https://img.shields.io/npm/dt/npwp-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=npwp-validator)
[![npm license](https://img.shields.io/npm/l/npwp-validator?style=flat-square&color=red)](https://github.com/ibamibrhm/npwp-validator/blob/master/LICENSE)

`npwp-validator` adalah library yang dibuat untuk mempermudah validasi dan pemformatan Nomor Pokok Wajib Pajak (NPWP) Indonesia.

## Instalasi

Anda dapat menginstal `npwp-validator` menggunakan npm:

```bash
$ npm install npwp-validator
```

Atau menggunakan yarn:

```bash
$ yarn add npwp-validator
```

## Penggunaan

Setelah berhasil diinstal, Anda dapat mengimpor library dengan menggunakan sintaks `import`:

```js
import npwp from 'npwp-validator';
```

Atau menggunakan sintaks `require`:

```js
const npwp = require('npwp-validator');
```

Berikut adalah beberapa fungsi yang tersedia untuk digunakan:

### `is_valid`
Fungsi ini mengembalikan nilai boolean yang menunjukkan apakah NPWP yang diberikan valid sesuai dengan format atau tidak.

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

Library ini dilisensikan di bawah [MIT License](https://github.com/ibamibrhm/npwp-validator/blob/master/LICENSE).
