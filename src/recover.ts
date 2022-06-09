import fs from 'fs';
let JSONbig = require('json-bigint')({ useNativeBigInt: true });

let recover = JSONbig.parse(fs.readFileSync('recover.json', 'utf8'));
let state = JSONbig.parse(fs.readFileSync('state.json', 'utf8'));

// code of System:
// 0x26aa394eea5630e07c48ae0c9558cef726aa394eea5630e07c48ae0c9558cef7
// code of RandomnessCollectiveFlip:
// 0xbd2a529379475088d3e29a918cd47872bd2a529379475088d3e29a918cd47872
// code of Timestamp:
// 0xf0c365c3cf59d671eb72da0e7a4113c4f0c365c3cf59d671eb72da0e7a4113c4
// code of Babe:
// 0x1cb6f36e027abb2091cfb5110ab5087f1cb6f36e027abb2091cfb5110ab5087f
// code of Authorship:
// 0xd57bce545fb382c34570e5dfbf338f5ed57bce545fb382c34570e5dfbf338f5e
// code of TransactionPayment:
// 0x3f1467a096bcd71a5b6a0c8155e208103f1467a096bcd71a5b6a0c8155e20810
// code of Session:
// 0xcec5070d609dd3497f72bde07fc96ba0cec5070d609dd3497f72bde07fc96ba0
// code of Grandpa:
// 0x5f9cc45b7a00c5899361e1c6099678dc5f9cc45b7a00c5899361e1c6099678dc
// code of ImOnline:
// 0x2b06af9719ac64d755623cda8ddd9b942b06af9719ac64d755623cda8ddd9b94
// code of Historical:
// 0x2f85f1e1378cb2d7b83adbaf0b5869c22f85f1e1378cb2d7b83adbaf0b5869c2
// code of Mmr:
// 0xa8c65209d47ee80f56b0011e8fd91f50a8c65209d47ee80f56b0011e8fd91f50
// code of Beefy:
// 0x08c41974a97dbf15cfbec28365bea2da08c41974a97dbf15cfbec28365bea2da
// code of MmrLeaf:
// 0xda7d4185f8093e80caceb64da45219e3da7d4185f8093e80caceb64da45219e3
// code of Sudo:
// 0x5c0d1176a568c1f92944340dbfed9e9c5c0d1176a568c1f92944340dbfed9e9c
// code of OctopusAppchain:
// 0x18878563306ebb9373c9e8590d9f405e18878563306ebb9373c9e8590d9f405e
// code of Balances:
// 0xc2261276cc9d1f8598ea4b6a74b15c2fc2261276cc9d1f8598ea4b6a74b15c2f
// code of OctopusLpos:
// 0x63519cd402964d6e695330f0f2b33e3563519cd402964d6e695330f0f2b33e35
// code of OctopusUpwardMessages:
// 0xa0a466cd39dcd7b29fbf9a60e1ac8d75a0a466cd39dcd7b29fbf9a60e1ac8d75
// code of OctopusAssets:
// 0x0247d088a0ca2cdcec6ac167c978ff2a0247d088a0ca2cdcec6ac167c978ff2a
// code of OctopusUniques:
// 0xa272e4c0755abb7ea3b1537ad863521ca272e4c0755abb7ea3b1537ad863521c

let systemKey  = "0x26aa394eea5630e07c48ae0c9558cef7";
// let randomKey  = "0xbd2a529379475088d3e29a918cd47872";
// let timeKey    = "0xf0c365c3cf59d671eb72da0e7a4113c4";
// let babeKey    = "0x1cb6f36e027abb2091cfb5110ab5087f";
// let authorKey  = "0xd57bce545fb382c34570e5dfbf338f5e";
// let paymentKey = "0x3f1467a096bcd71a5b6a0c8155e20810";
// let sessionKey = "0xcec5070d609dd3497f72bde07fc96ba0";
// let grandpaKey = "0x5f9cc45b7a00c5899361e1c6099678dc";
// let onlineKey  = "0x2b06af9719ac64d755623cda8ddd9b94";
// let historyKey = "0x2f85f1e1378cb2d7b83adbaf0b5869c2";
// let mmrKey     = "0xa8c65209d47ee80f56b0011e8fd91f50";
// let beefyKey   = "0x08c41974a97dbf15cfbec28365bea2da";
// let mmrleafKey = "0xda7d4185f8093e80caceb64da45219e3";
// let sudoKey    = "0x5c0d1176a568c1f92944340dbfed9e9c";
let balancesKey = "0xc2261276cc9d1f8598ea4b6a74b15c2f";
let appchainKey = "0x18878563306ebb9373c9e8590d9f405e";
let lposKey     = "0x63519cd402964d6e695330f0f2b33e35";
let upwardKey   = "0x63519cd402964d6e695330f0f2b33e35";
let assetsKey   = "0x0247d088a0ca2cdcec6ac167c978ff2a";
let uniquesKey  = "0xa272e4c0755abb7ea3b1537ad863521c";


console.log(Object.keys(recover.genesis.raw.top).length);

for (let key in state.genesis.raw.top) {
  let k = key.slice(0, 34);
  if ((k == systemKey) ||
    // (k == randomKey)   || 
    // (k == timeKey)     || 
    // (k == babeKey)     || 
    // (k == authorKey)   || 
    // (k == paymentKey)  || 
    // (k == sessionKey)  || 
    // (k == grandpaKey)  || 
    // (k == onlineKey)   || 
    // (k == historyKey)  || 
    // (k == mmrKey)      || 
    // (k == beefyKey)    || 
    // (k == mmrleafKey)  || 
    // (k == sudoKey)     || 
    (k == balancesKey) ||
    (k == appchainKey) ||
    (k == lposKey)     ||
    (k == upwardKey)   ||
    (k == assetsKey)   ||
    (k == uniquesKey)) {
    recover.genesis.raw.top[key] = state.genesis.raw.top[key]
  }
}

console.log(Object.keys(recover.genesis.raw.top).length);

fs.writeFileSync('new.json', JSONbig.stringify(recover));
console.log('new.json written.');