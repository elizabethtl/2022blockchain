// https://github.com/travist/jsencrypt/issues/147
// $ npm install nodejs-jsencrypt
const JSEncrypt = require('nodejs-jsencrypt').default;
const crypt = new JSEncrypt({default_key_size: 512});
const priveteKey = crypt.getPrivateKey();
console.log("private key: " + priveteKey);
const publicKey = crypt.getPublicKey();
console.log("public key: " + publicKey);

// https://ithelp.ithome.com.tw/articles/10185008
var RSA = {
    encrypt : function(rawStr) {
        const n1cypt = new JSEncrypt();
        n1cypt.setPublicKey(publicKey);
        return n1cypt.encrypt(rawStr);
    },
    decrypt : function(encrptStr) {
        const n2cypt = new JSEncrypt();
        n2cypt.setPrivateKey(priveteKey);
        return n2cypt.decrypt(encrptStr);
    }
};

module.exports = RSA  //這一步很重要，只要模組(程式)要給別的模組(程式)使用，必須加這個！！
