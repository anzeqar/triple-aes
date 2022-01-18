const { AES, enc } = require("crypto-js");

/**
 * @author anzeqar
 * @class TripleAES
 * @exports tripleAES
 * @package triple-aes
 * @license MIT
 */

// Class TripleAES
class TripleAES {
  // encrypt function
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
  // decrypt function
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
module.exports = tripleAES;
