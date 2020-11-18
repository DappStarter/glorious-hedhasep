require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember arrow good drink fresh slender'; 
let testAccounts = [
"0x2f3581a7120cce3c3ddcc941906e2fa2173427438e8558a1804c833875385923",
"0x6b4dc8d58436f07f6a0fd4ea3a814cb350926c42c4e8be45afa104c44e1f8304",
"0x08492d8536186082f420580d46881f1c97b0b08582eba83af7f4269c65f3e3b5",
"0xa255aa34f93d042aca7cfcf71e91eff524bd239e160f5905c71c2a9eca6a9bb1",
"0x0c183d6b371340231e0e72278e1d320e8d0e44d1f0b59d7e3cd7a273b18fa2bb",
"0x945c333f32362bce2b4e704dc02a321c4ef74a14726c20349749af16ed0b48f9",
"0x93813bd4ffa752c5df22b1af1e7524ab82a7c8f6fd75da34937b669972cabbc1",
"0xa79d150c1bcfc0b034f73565930b2c68cfd0f5bef0cb9b7d36ec15c920304c6a",
"0xbe3d3ff0dcd2df35074a077d4fdc9062bfde844d74756559f7a0673bf30f036e",
"0x18ac606cbaba3f8796611988d7d3fe947eccdb48d43965db7077179f9484396b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
