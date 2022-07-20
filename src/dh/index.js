module.exports = class DH {
  constructor(publicKey1, publicKey2, privateKey) {
    this.publicKey1 = publicKey1;
    this.publicKey2 = publicKey2;
    this.privateKey = privateKey;
  }

  generatePartialKey() {
    return (this.publicKey1 ** this.privateKey) % this.publicKey2
  }

  generateFullKey(partialKey) {
    return (partialKey  **  this.privateKey) % this.publicKey2
  }
}
