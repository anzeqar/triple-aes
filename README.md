# Triple AES ![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)

## AES - Advanced Encryption Standard

AES is considered as one of the safest encryption algorithm but what if we level up it's encryption upto 3 times ? This is what this package does, it encrypts your secret message with 3 private keys making it extremely impossible to decrypt without those keys.

![TRIPLE AES](https://raw.githubusercontent.com/anzeqar/triple-aes/master/triple-aes-encryption.png)

## Node.js / React / Angular / Vue, etc.. (Install)

Requirements:

- Node.js (latest is better)
- npm (Node.js package manager)

```bash
npm i triple-aes
```

### Usage

Common JS Require

```javascript
// Common JS Syntax
const tripleAES = require("triple-aes"); // ES5 Require
const { encrypt, decrypt } = tripleAES;

const encryptedText = encrypt("data", "key1", "key2", "key3"); // default values

const plainText = decrypt(
  "U2FsdGVkX184aHiidXNMvILNxSHE4m9PPsz4c5RHJu0h6Umtc+yG2FbF6TjA/c4r7dZla6qZ8fZJGS4yJaiC/Y9eEUkQ0reruafrKZ6irVAodFtStTSHfoPGc1VXtYYEe+PhghEK9qeY2oPa7BOfZw==",
  "key1",
  "key2",
  "key3"
); // default values

console.log(encryptedText); // U2FsdGVkX18VCddIIe9z9sFWj/k7vV5sezB94ZdG6+yGgHv7Lu4xAuZw6jBU54XrKtE8G3KK83uNBkMrEut68FMh5Bn0QIujVqnrS2or/Uc2HdATOf2q8q2gtmNWF1kB2Gxar9+P+zycjUognqsX2Q==

console.log(plainText); // data
```

ES6 Include

```javascript
// ES6 Syntax
import { encrypt, decrypt } from "triple-aes"; // ES6 Import

const encryptedText = encrypt("data", "key1", "key2", "key3"); // default values

const plainText = decrypt(
  "U2FsdGVkX184aHiidXNMvILNxSHE4m9PPsz4c5RHJu0h6Umtc+yG2FbF6TjA/c4r7dZla6qZ8fZJGS4yJaiC/Y9eEUkQ0reruafrKZ6irVAodFtStTSHfoPGc1VXtYYEe+PhghEK9qeY2oPa7BOfZw==",
  "key1",
  "key2",
  "key3"
); // default values

console.log(encryptedText); // U2FsdGVkX18VCddIIe9z9sFWj/k7vV5sezB94ZdG6+yGgHv7Lu4xAuZw6jBU54XrKtE8G3KK83uNBkMrEut68FMh5Bn0QIujVqnrS2or/Uc2HdATOf2q8q2gtmNWF1kB2Gxar9+P+zycjUognqsX2Q==

console.log(plainText); // data
```

### List of modules

- `triple-aes/tripleAES`

### Authors

[`anzeqar`](https://github.com/anzeqar)
