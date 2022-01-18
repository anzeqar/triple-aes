export = tripleAES;
declare const tripleAES: TripleAES;
/**
 * @author anzeqar
 * @class TripleAES
 * @exports tripleAES
 * @package triple-aes
 * @license MIT
 */
declare class TripleAES {
    encrypt: (data?: string, key1?: string, key2?: string, key3?: string) => any;
    decrypt: (data?: string, key1?: string, key2?: string, key3?: string) => any;
}
