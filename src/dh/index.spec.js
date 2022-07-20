const DH = require('./')

const privateKey1 = 199n
const publicKey1 = 197n

const privateKey2 = 157n
const publicKey2 = 151n

const dh1 = new DH(publicKey1, publicKey2, privateKey1)
const dh2 = new DH(publicKey1, publicKey2, privateKey2)

const partialKey1 = dh1.generatePartialKey()
const partialKey2 = dh2.generatePartialKey()

// console.log(partialKey1, partialKey2)

const fullKey1 = dh1.generateFullKey(partialKey2)
const fullKey2 = dh2.generateFullKey(partialKey1)

// console.log(fullKey1, fullKey2)
