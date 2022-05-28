先安裝
npm install nodejs-jsencrypt

simple_encrypt.js:
var str = ">ref|NP_001263624.1| ....
重設 "var str" 為基因字串明文
key = "monday", 
重設 "key"為使用者的綠色鑰匙
encodeStr = encode(str, key), 
基因秘文為"encodeStr
decodeStr = decode(encodeStr, key); 
用"decodeStr = decode(encodeStr, key);"解密後的文字為decodeStr

RSA.js:
放在與RSA_usage.js同個資料夾，提供模組使用

public.pem＆private.pem:
放在與RSA.js同個資料夾，提供參數
也可用 openssl genrsa -out private.pem 1024 產生新的不同的private
再用 openssl rsa -pubout -in private.pem -out public.pem 產生新的不同的public

RSA_usage.js:
rawStr="ABC";
重設"rawStr"為綠色鑰匙
encresult=RSA.encrypt(rawStr);
綠色鑰匙被加密後成為encresult
decrypt();
這個會輸出解密綠色鑰匙




