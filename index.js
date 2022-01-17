const { AES, enc } = require("crypto-js");

class TripleAES {
  encrypt = (data = "data", key1 = "key1", key2 = "key2", key3 = "key3") => {
    try {
      const encrypter1 = AES.encrypt(data, key1).toString();
      const encrypter2 = AES.encrypt(encrypter1, key2).toString();
      const encrypter3 = AES.encrypt(encrypter2, key3).toString();
      if (encrypter3) return encrypter3;
      else return "Invalid Data Provided";
    } catch (err) {
      return err;
    }
  };
  decrypt = (
    data = "U2FsdGVkX184aHiidXNMvILNxSHE4m9PPsz4c5RHJu0h6Umtc+yG2FbF6TjA/c4r7dZla6qZ8fZJGS4yJaiC/Y9eEUkQ0reruafrKZ6irVAodFtStTSHfoPGc1VXtYYEe+PhghEK9qeY2oPa7BOfZw==",
    key1 = "key1",
    key2 = "key2",
    key3 = "key3"
  ) => {
    try {
      const decrypter1 = AES.decrypt(data, key3).toString(enc.Utf8);
      const decrypter2 = AES.decrypt(decrypter1, key2).toString(enc.Utf8);
      const decrypter3 = AES.decrypt(decrypter2, key1).toString(enc.Utf8);
      if (decrypter3) return decrypter3;
      else return "Invalid Data Provided";
    } catch (err) {
      return err;
    }
  };
}

const tripleAES = new TripleAES();
// let encryptedData = tripleAES.encrypt(
//   "This is Secret Data",
//   "secret key 1",
//   "secret key 2",
//   "secret key 3"
// );
// console.log(encryptedData);
// let decryptedData = tripleAES.decrypt(
//   "U2FsdGVkX1+tRhNPlLlNhh9yUMaLqZdq7ZP0n8CGmQR3JrVe8esQ1xzEgAb9TTZUag4upBQkYJJ6wRj8Kn1G+po3QLc8JevceDM0l5WMszAVO9QFbAg6CYyP4PM5SeKFRl/a7hvWeZXCW/pxazpuowT+kodJNUAQeCOvvPHHiVAfmFTEifZLrSohaDzB+dKnA/ObsbO5897VpPEJ8gpf8Q==",
//   "secret key 1",
//   "secret key 2",
//   "secret key 3"
// );

console.log(decryptedData);

module.exports = tripleAES;
