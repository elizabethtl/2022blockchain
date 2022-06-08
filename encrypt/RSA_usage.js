// On 2022/05/22
// See the bottom of this file to know how to run this file.

// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var RSA = require('./RSA.js');
/*
readline.question("Input a string to encrypt: ", rawStr => {
    console.log(`Your string: ${rawStr}!\n`); // use backtick to evalute ${rawStr}
    console.log(RSA.encrypt(rawStr)) // print out the encrypted string
    decrypt();
});
*/

var decrypt = function() {
  readline.question("\nCopy the above string to decrypt: ", encStr => {
    // console.log(`Your string: ${encStr}!`); // use backtick to evalute ${encStr}
    console.log() // print a blank line
    console.log(RSA.decrypt(encStr)) // print out the decrypted string
    readline.close();
  });
}
rawStr="ABC";

console.log("rawStr: " + rawStr);
encresult=RSA.encrypt(rawStr);
console.log("enc result: " + encresult);
console.log(encresult);
decrypt();

/*
Reference: https://www.npmjs.com/package/nodejs-jsencrypt

First you need to create private.pem and public.pem for later use.

Within your terminal (Unix based OS) type the following.
$ openssl genrsa -out private.pem 1024
This generates a private key, which you can see by doing the following...
$ cat private.pem

Next, you can then get the public key by executing the following command.
$ openssl rsa -pubout -in private.pem -out public.pem
You can see the public key by typing...
$ cat public.pem

Now you can run the following command to know how to use RSA.js
$ npm install nodejs-jsencrypt
$ node RSA_usage.js
Input a string to encrypt: Hello Super Star
Your string: Hello Super Star!

A475xXS8NMrk/Hkh5txurFM2J5s9jc03QGotgjMPuhLiVrsHRiIHy1RYqHveinjZyAxCcqFSvCJxWhfZlSiZ9Q==
Copy the above string to decrypt: A475xXS8NMrk/Hkh5txurFM2J5s9jc03QGotgjMPuhLiVrsHRiIHy1RYqHveinjZyAxCcqFSvCJxWhfZlSiZ9Q==
Hello Super Star

*/
